"use server"

import connection from "./db"
import { redirect } from "next/navigation"


export async function register(formData) {
    const username = formData.get("username")
    const email = formData.get("email")
    const password = formData.get("password")

    await connection.execute('insert into users (username, email, password) values (?,?,?)', [username,email,password])

    
    redirect("/login")
}