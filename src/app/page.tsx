"use client";

import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { NewToDoForm } from "./_components/new-todo-form";
import { ToDoList } from "./_components/to-do-list";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { GenerateTodosForm } from "./_components/generate-todos-form";


export default function Home() {
  
  return (
    <div className="max-w-screen-md mx-auto p-4 space-y-4">
      <Authenticated>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">To-Do List</h1>
          <UserButton />
        </div>
        <ToDoList/>
        <GenerateTodosForm/>
        <NewToDoForm/>
      </Authenticated>
      <Unauthenticated>
        <p className="text-gray-600">Please sign in to continue</p>
        <SignInButton>
          <button className="p-1 bg-blue-500 text-white rounded">Sign In</button>
        </SignInButton>
      </Unauthenticated>
      <AuthLoading>
        <p>Loading...</p>
      </AuthLoading>
    </div>
  );
}