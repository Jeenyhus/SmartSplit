from flask import Blueprint, request, jsonify
import qrcode
from io import BytesIO
import base64

main = Blueprint('main', __name__)

@main.route('/api/create-bill', methods=['POST'])
def create_bill():
    data = request.json
    total = data.get('total')
    people = data.get('people')

    # Generate QR Code
    qr_data = f"Total: {total}, People: {people}"
    img = qrcode.make(qr_data)
    buffer = BytesIO()
    img.save(buffer, format="PNG")
    qr_code_b64 = base64.b64encode(buffer.getvalue()).decode('utf-8')

    return jsonify({"qr_code_url": f"data:image/png;base64,{qr_code_b64}"})