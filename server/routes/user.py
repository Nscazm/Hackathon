from flask import Blueprint, jsonify, request
from mysql.connector import Error
from db import get_db_connection

user_bp = Blueprint("user", __name__)

@user_bp.route('/user_signup', methods=['POST'])
def user_signup():
    pass

@user_bp.route('/user_login', methos=['POST'])
def user_login():
    pass