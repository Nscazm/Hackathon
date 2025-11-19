from flask import Blueprint, jsonify, request
from mysql.connector import Error
from werkzeug.security import generate_password_hash, check_password_hash
from db import get_db_connection

user_bp = Blueprint("user", __name__)

@user_bp.route('/user_signup', methods=['POST'])
def user_signup():
    data = request.get_json()
    firstname = data.get('firstname')
    lastname = data.get('lastname')
    password = data.get('password')
    email = data.get('email')
    if_teacher = data.get('if_teacher')
    profile = data.get('profile')

    hashed_password = generate_password_hash(password)

    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("""
            INSER INTO user (firstname, lastname, pasword, email, if_teacher) 
            VALUES (%s, %s, %s, %s, %s)
        """, (firstname, lastname, hashed_password, email, if_teacher))
        conn.commit()

        cursor.execute("SELECT *FROM user WHERE email=%s",(email,))
        cursor.fetchone()

        user_obj ={
            "first_name": firstname,
            "last_name": lastname,
            "profile": f"http://127.0.0.1:5000/static/profiles/{profile}"
        }
    except Error as e:
        print("Database Error:", e)
        return jsonify({"error": "Failed to register user"}), 500
    finally:
        if conn.is_connected():
            cursor.close()
            conn.close()

@user_bp.route('/user_login', methos=['POST'])
def user_login():
    pass