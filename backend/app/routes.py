from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.security import (
    generate_password_hash,
    check_password_hash,
)
from bson import ObjectId
from db import init_db
from models import (
    Customer,
    NewsLetter,
    Slider,
    About,
    Service,
    Work,
    Team,
    Client,
    Contact,
    Footer,
    User,
)

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
mongo = init_db(app)


@app.after_request
def after_request(response):
    header = response.headers
    header["Access-Control-Allow-Origin"] = "*"
    header["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    header["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
    return response


# Customer Routes
def get_customers():
    customers = mongo.customer.find()
    # Create a list of dictionaries containing customer data along with their IDs
    customers_with_ids = [
        {"_id": str(customer["_id"]), **customer} for customer in customers
    ]
    return jsonify({"customers": customers_with_ids}), 200


@app.route("/customer", methods=["POST"])
def create_customer():
    data = request.json
    customer = Customer(
        data["name"], data["email"], data["subject"], data["message"], mongo
    )
    customer.save()
    return jsonify({"message": "Customer created successfully"}), 201


@app.route("/customer/<customer_id>", methods=["PUT"])
def update_customer(customer_id):
    data = request.json
    updated_customer = {
        "name": data.get("name"),
        "email": data.get("email"),
        "subject": data.get("subject"),
        "message": data.get("message"),
    }
    mongo.customer.update_one(
        {"_id": ObjectId(customer_id)}, {"$set": updated_customer}
    )
    return jsonify({"message": "Customer updated successfully"}), 200


@app.route("/customer/<customer_id>", methods=["DELETE"])
def delete_customer(customer_id):
    mongo.customer.delete_one({"_id": ObjectId(customer_id)})
    return jsonify({"message": "Customer deleted successfully"}), 200


# NewsLetter Routes
def get_newsletter():
    subscribers = mongo.newsfeed.find()
    # Convert ObjectIDs to strings
    subscribers_with_ids = [
        {"_id": str(subscriber["_id"]), **subscriber} for subscriber in subscribers
    ]
    return jsonify({"subscribers": subscribers_with_ids}), 200


@app.route("/newsletter", methods=["POST"])
def subscribe_to_newsletter():
    data = request.json
    newsletter = NewsLetter(data["email"], mongo)
    newsletter.save()
    return jsonify({"message": "Subscribed to newsletter successfully"}), 201


@app.route("/newsletter/<newsletter_id>", methods=["PUT"])
def update_newsletter(newsletter_id):
    data = request.json
    updated_newsletter = {"email": data.get("email")}
    mongo.newsfeed.update_one(
        {"_id": ObjectId(newsletter_id)}, {"$set": updated_newsletter}
    )
    return jsonify({"message": "Newsletter updated successfully"}), 200


@app.route("/newsletter/<newsletter_id>", methods=["DELETE"])
def delete_newsletter(newsletter_id):
    mongo.newsfeed.delete_one({"_id": ObjectId(newsletter_id)})
    return jsonify({"message": "Newsletter deleted successfully"}), 200


# Slider Routes
@app.route("/slider", methods=["GET"])
def get_sliders():
    sliders = mongo.slider.find()
    # Convert ObjectIDs to strings
    sliders_with_ids = [
        {"_id": str(slider["_id"]), **{k: v for k, v in slider.items() if k != "_id"}}
        for slider in sliders
    ]
    return jsonify({"sliders": sliders_with_ids}), 200


@app.route("/slider", methods=["POST"])
def create_slider():
    data = request.json
    slider = Slider(
        data["title"],
        data["contact_link"],
        data["quote_link"],
        data["description"],
        data["image"],
        mongo,
    )
    slider.save()
    return jsonify({"message": "Slider created successfully"}), 201


@app.route("/slider/<slider_id>", methods=["PUT"])
def update_slider(slider_id):
    data = request.json
    updated_slider = {
        "title": data.get("title"),
        "contact_link": data.get("contact_link"),
        "quote_link": data.get("quote_link"),
        "description": data.get("description"),
        "image": data.get("image"),
    }
    mongo.slider.update_one({"_id": ObjectId(slider_id)}, {"$set": updated_slider})
    return jsonify({"message": "Slider updated successfully"}), 200


@app.route("/slider/<slider_id>", methods=["DELETE"])
def delete_slider(slider_id):
    mongo.slider.delete_one({"_id": ObjectId(slider_id)})
    return jsonify({"message": "Slider deleted successfully"}), 200


# About Routes
@app.route("/about", methods=["GET"])
def get_about():
    about = mongo.about.find()
    # Convert ObjectIDs to strings
    about_with_ids = [
        {"_id": str(a["_id"]), **{k: v for k, v in a.items() if k != "_id"}}
        for a in about
    ]
    return jsonify({"about": about_with_ids}), 200


@app.route("/about", methods=["POST"])
def create_about():
    data = request.json
    about = About(
        data["title"], data["description"], data["read"], data["image"], mongo
    )
    about.save()
    return jsonify({"message": "About section created successfully"}), 201


@app.route("/about/<about_id>", methods=["PUT"])
def update_about(about_id):
    data = request.json
    updated_about = {
        "title": data.get("title"),
        "description": data.get("description"),
        "read": data.get("read"),
        "image": data.get("image"),
    }
    mongo.about.update_one({"_id": ObjectId(about_id)}, {"$set": updated_about})
    return jsonify({"message": "About Page updated successfully"}), 200


@app.route("/about/<about_id>", methods=["DELETE"])
def delete_about(about_id):
    mongo.about.delete_one({"_id": ObjectId(about_id)})
    return jsonify({"message": "About Page deleted successfully"}), 200


# Service Routes
@app.route("/service", methods=["GET"])
def get_service():
    service = mongo.service.find()
    # Convert ObjectIDs to strings
    service_with_ids = [
        {"_id": str(s["_id"]), **{k: v for k, v in s.items() if k != "_id"}}
        for s in service
    ]
    return jsonify({"service": service_with_ids}), 200


@app.route("/service", methods=["POST"])
def create_service():
    data = request.json
    service = Service(
        data["title"],
        data["description"],
        data["service_title"],
        data["service_description"],
        data["read"],
        data["image"],
        mongo,
    )
    service.save()
    return jsonify({"message": "Service created successfully"}), 201


@app.route("/service/<service_id>", methods=["PUT"])
def update_service(service_id):
    data = request.json
    updated_service = {
        "title": data.get("title"),
        "description": data.get("description"),
        "service_title": data.get("service_title"),
        "service_description": data.get("service_description"),
        "read": data.get("read"),
        "image": data.get("image"),
    }
    mongo.service.update_one({"_id": ObjectId(service_id)}, {"$set": updated_service})
    return jsonify({"message": "Service Page updated successfully"}), 200


@app.route("/service/<service_id>", methods=["DELETE"])
def delete_service(service_id):
    mongo.service.delete_one({"_id": ObjectId(service_id)})
    return jsonify({"message": "Service Page deleted successfully"}), 200


@app.route("/work", methods=["GET"])
def get_works():
    works = mongo.work.find()
    # Convert ObjectIDs to strings
    works_with_ids = [
        {"_id": str(w["_id"]), **{k: v for k, v in w.items() if k != "_id"}}
        for w in works
    ]
    return jsonify({"works": works_with_ids}), 200


@app.route("/work", methods=["POST"])
def create_work():
    data = request.json
    work = Work(
        data["title"],
        data["description"],
        data["service_title"],
        data["service_description"],
        data["read"],
        data["image"],
        mongo,
    )
    work.save()
    return jsonify({"message": "Work created successfully"}), 201


@app.route("/work/<work_id>", methods=["PUT"])
def update_work(work_id):
    data = request.json
    updated_work = {
        "title": data.get("title"),
        "description": data.get("description"),
        "service_title": data.get("service_title"),
        "service_description": data.get("service_description"),
        "read": data.get("read"),
        "image": data.get("image"),
    }
    mongo.work.update_one({"_id": ObjectId(work_id)}, {"$set": updated_work})
    return jsonify({"message": "Work updated successfully"}), 200


@app.route("/work/<work_id>", methods=["DELETE"])
def delete_work(work_id):
    mongo.work.delete_one({"_id": ObjectId(work_id)})
    return jsonify({"message": "Work deleted successfully"}), 200


# Team Routes
@app.route("/team", methods=["GET"])
def get_team():
    team = mongo.team.find()
    # Convert ObjectIDs to strings
    team_with_ids = [
        {"_id": str(t["_id"]), **{k: v for k, v in t.items() if k != "_id"}}
        for t in team
    ]
    return jsonify({"team": team_with_ids}), 200


@app.route("/team", methods=["POST"])
def create_team():
    data = request.json
    team = Team(
        data["name"],
        data["description"],
        data["image"],
        data["link_fb"],
        data["link_tw"],
        data["link_linkedin"],
        data["link_insta"],
        mongo,
    )
    team.save()
    return jsonify({"message": "Team member created successfully"}), 201


@app.route("/team/<team_id>", methods=["PUT"])
def update_team(team_id):
    data = request.json
    updated_team = {
        "name": data.get("name"),
        "description": data.get("description"),
        "image": data.get("image"),
        "link_fb": data.get("link_fb"),
        "link_tw": data.get("link_tw"),
        "link_linkedin": data.get("link_linkedin"),
        "link_insta": data.get("link_insta"),
    }
    mongo.team.update_one({"_id": ObjectId(team_id)}, {"$set": updated_team})
    return jsonify({"message": "Team Member updated successfully"}), 200


@app.route("/team/<team_id>", methods=["DELETE"])
def delete_team(team_id):
    mongo.team.delete_one({"_id": ObjectId(team_id)})
    return jsonify({"message": "Team Member deleted successfully"}), 200


# Client Routes
@app.route("/client", methods=["GET"])
def get_clients():
    clients = mongo.client.find()
    # Convert ObjectIDs to strings
    clients_with_ids = [{"_id": str(client["_id"]), **client} for client in clients]
    return jsonify({"clients": clients_with_ids}), 200


@app.route("/client", methods=["POST"])
def create_client():
    data = request.json
    client = Client(data["name"], data["description"], data["image"], mongo)
    client.save()
    return jsonify({"message": "Client created successfully"}), 201


@app.route("/client/<client_id>", methods=["PUT"])
def update_client(client_id):
    data = request.json
    updated_client = {
        "name": data.get("name"),
        "description": data.get("description"),
        "image": data.get("image"),
    }
    mongo.client.update_one({"_id": ObjectId(client_id)}, {"$set": updated_client})
    return jsonify({"message": "Client updated successfully"}), 200


@app.route("/client/<client_id>", methods=["DELETE"])
def delete_client(client_id):
    mongo.client.delete_one({"_id": ObjectId(client_id)})
    return jsonify({"message": "Client deleted successfully"}), 200


# Contact Routes
@app.route("/contact", methods=["GET"])
def get_contacts():
    contacts = mongo.contact.find()
    # Convert ObjectIDs to strings
    contacts_with_ids = [
        {"_id": str(contact["_id"]), **{k: v for k, v in contact.items() if k != "_id"}}
        for contact in contacts
    ]
    return jsonify({"contacts": contacts_with_ids}), 200


@app.route("/contact", methods=["POST"])
def create_contact():
    data = request.json
    contact = Contact(data["telephone"], data["email"], mongo)
    contact.save()
    return jsonify({"message": "Contact created successfully"}), 201


@app.route("/contact/<contact_id>", methods=["PUT"])
def update_contact(contact_id):
    data = request.json
    updated_contact = {"telephone": data.get("telephone"), "email": data.get("email")}
    mongo.contact.update_one({"_id": ObjectId(contact_id)}, {"$set": updated_contact})
    return jsonify({"message": "Contact updated successfully"}), 200


@app.route("/contact/<contact_id>", methods=["DELETE"])
def delete_contact(contact_id):
    mongo.contact.delete_one({"_id": ObjectId(contact_id)})
    return jsonify({"message": "Contact deleted successfully"}), 200


# Footer Routes
def get_footer():
    footer = mongo.footer.find()
    # Convert ObjectIDs to strings
    footer_with_ids = [{"_id": str(f["_id"]), **f} for f in footer]
    return jsonify({"footer": footer_with_ids}), 200


@app.route("/footer", methods=["POST"])
def create_footer():
    data = request.json
    footer = Footer(
        data["link_facebook"],
        data["link_twitter"],
        data["link_linkedin"],
        data["link_youtube"],
        mongo,
    )
    footer.save()
    return jsonify({"message": "Footer created successfully"}), 201


@app.route("/footer/<footer_id>", methods=["PUT"])
def update_footer(footer_id):
    data = request.json
    updated_footer = {
        "link_facebook": data.get("link_facebook"),
        "link_twitter": data.get("link_twitter"),
        "link_linkedin": data.get("link_linkedin"),
        "link_youtube": data.get("link_youtube"),
    }
    mongo.footer.update_one({"_id": ObjectId(footer_id)}, {"$set": updated_footer})
    return jsonify({"message": "Footer updated successfully"}), 200


@app.route("/footer/<footer_id>", methods=["DELETE"])
def delete_footer(footer_id):
    mongo.footer.delete_one({"_id": ObjectId(footer_id)})
    return jsonify({"message": "Footer deleted successfully"}), 200


# User Routes
def get_users():
    users = mongo.user.find()
    # Convert ObjectIDs to strings
    users_with_ids = [{"_id": str(user["_id"]), **user} for user in users]
    return jsonify({"users": users_with_ids}), 200


@app.route("/user", methods=["POST"])
def create_user():
    data = request.json
    user = User(
        data["username"],
        data["password"],
        data["email"],
        data["name"],
        data["is_admin"],
        mongo,
    )
    user.save()
    return jsonify({"message": "User created successfully"}), 201


@app.route("/user/<user_id>", methods=["PUT"])
def update_user(user_id):
    data = request.json
    updated_user = {
        "username": data.get("username"),
        "password": data.get("password"),
        "email": data.get("email"),
        "name": data.get("name"),
        "is_admin": data.get("is_admin"),
    }
    mongo.user.update_one({"_id": ObjectId(user_id)}, {"$set": updated_user})
    return jsonify({"message": "User updated successfully"}), 200


@app.route("/user/<user_id>", methods=["DELETE"])
def delete_user(user_id):
    mongo.user.delete_one({"_id": ObjectId(user_id)})
    return jsonify({"message": "User deleted successfully"}), 200


@app.route("/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    user = mongo.user.find_one({"username": username})

    if user and check_password_hash(user["password"], password):
        return jsonify({"message": "Login successful"}), 200

    return jsonify({"message": "Invalid credentials"}), 401


@app.route("/register", methods=["POST"])
def register():
    data = request.json
    username = data.get("username")
    password = data.get("password")
    email = data.get("email")
    name = data.get("name")
    is_admin = data.get("is_admin")

    if mongo.user.find_one({"username": username}) or mongo.user.find_one(
        {"email": email}
    ):
        return jsonify({"message": "User already exists"}), 400

    hashed_password = generate_password_hash(password)

    user = User(username, hashed_password, email, name, is_admin, mongo)
    user.save()

    return jsonify({"message": "User created successfully"}), 201


if __name__ == "__main__":
    app.run(debug=True)
