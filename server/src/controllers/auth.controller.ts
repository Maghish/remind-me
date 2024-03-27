import UserModel from "../models/auth.model";
import { Request, Response } from "express";
import { sign, verify } from "jsonwebtoken";
import { genSalt, hash, compare } from "bcryptjs";
import { DecodeJWT } from "../../env";

function generateToken(id: any) {
  return sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: "30d",
  });
}

async function getCurrentUserData(req: Request) {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = verify(token, process.env.JWT_SECRET!) as DecodeJWT;
    const user = await UserModel.findById(decoded.id).select("-password");
    return user;
  } else {
    return null;
  }
}

async function signupUser(req: Request, res: Response) {
  try {
    const { username, email, password } = req.body;

    UserModel.findOne({
      username: username,
    })
      .then((response) => {
        if (response) {
          return res.status(400).json({
            message:
              "User already exist with same username, try different username",
          });
        }
      })
      .catch((error: any) => {});

    UserModel.findOne({
      email: email,
    })
      .then((response) => {
        if (response) {
          return res.status(400).json({
            message: "User already exist with same email, try different email",
          });
        }
      })
      .catch((error: any) => {});

    // Hash Password
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const newUser = new UserModel({
      username: username,
      email: email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(200).json({
      message: "Successfully created new user",
      token: generateToken(newUser._id),
      userData: newUser,
    });
  } catch (error: any) {
    return res.status(400).json({ message: error });
  }
}

async function loginUser(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const foundUser = await UserModel.findOne({ email });

    if (foundUser && (await compare(password, foundUser!.password))) {
      res.status(200).json({
        message: "Successfully authenticated user",
        token: generateToken(foundUser._id),
        userData: foundUser,
      });
    } else {
      res.status(400).json({ message: "Password not correct" });
    }
  } catch (error: any) {
    return res.status(400).json({ message: error });
  }
}

async function getUser(req: Request, res: Response) {
  try {
    const { username } = req.body;
    const user = await UserModel.findOne({ username: username });
    res
      .status(200)
      .json({ message: "Successfully found user", userData: user });
  } catch (error: any) {
    return res.status(400).json({ message: error });
  }
}

async function getCurrentUser(req: Request, res: Response) {
  try {
    const currentUser = await getCurrentUserData(req);
    if (currentUser) {
      res.status(200).json({
        message: "Successfully got the current user",
        userData: currentUser,
      });
    } else {
      res.status(400).json({ message: "You are not authenticated!" });
    }
  } catch (error: any) {
    return res.status(400).json({ message: error })
  }
}

async function editUser(req: Request, res: Response) {
  try {
    const { mode, newData } = req.body; // newData is the data that need to be edited
    
    const user = await getCurrentUserData(req);
    if (user) {
      if (mode === "email") {
        try {
          user.email = newData;
          const editedUser = await user.save();
          return res.status(200).json({
            message: "Successfully edited the user",
            editedUser: editedUser,
          });
        } catch (error) {
          return res
            .status(400)
            .json({ message: "Unexpected error occurred, please try again" });
        }
      }
      if (mode === "password") {
        try {
          // Hash Password
          const salt = await genSalt(10);
          const hashedPassword = await hash(newData, salt);
          user.password = hashedPassword;
          
          const editedUser = await user.save();
          return res.status(200).json({
            message: "Successfully edited the user",
            editedUser: editedUser,
          });
        } catch (error) {
          return res
            .status(400)
            .json({ message: "Unexpected error occurred, please try again" });
        }
      }
      if (mode === "username") {
        try {
          user.username = newData;
          const editedUser = await user.save();
          return res.status(200).json({
            message: "Successfully edited the user",
            editedUser: editedUser,
          });
        } catch (error) {
          return res
            .status(400)
            .json({ message: "Unexpected error occurred, please try again" });
        }
      }
    }
  }
  catch (error: any) {
    return res.status(400).json({ message: error })
  }
}

export {
  signupUser,
  loginUser,
  getUser,
  getCurrentUser,
  editUser
};
