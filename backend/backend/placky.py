from flask import (
    Blueprint, jsonify, send_from_directory,request
)
import os
from tasks import ml 
bp = Blueprint('placky', __name__, url_prefix='/')

# ALLOWED_EXTENSIONS = ("obj", )

# def allowed_file(filename):
#     return '.' in filename and \
#         filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@bp.route("/", methods=('POST', ))
def similarity():
    
    
    # if not os.path.exists('uploads'):
    #     os.makedirs('uploads')
    # file = request.files['file1']
    # # mtl1 = request.files['mtl1']
    # # mtl2 = request.files['mtl2']
    # new_file_name="model1.obj"
    # # new_mtl_name="model1.mtl"
    # file.save('uploads/' + new_file_name)
    # file = request.files['file2']
    # new_file_name="model2.obj"
    # file.save('uploads/' + new_file_name)
    # if 'file1' not in request.files and 'file2' not in request.files:
    #     return jsonify(error="Obj file not provided")
    # os.system("blender -b -P uploads/script.py")
    # result,image_gen = ml.delay().get()
    #  with open('/Users/chayansinha/Desktop/nasscom-main/MLBasic/output.txt','w') as output_file:
    #     data = request.get_json()
    #     print(data)
    #     output_file.write(str(data))
     return jsonify(similarity=1,image_gen=1)
     return "done"

    




# @bp.route('/uploads/<filename>')
# def download_models(filename):
#     return send_from_directory("../uploads", filename, as_attachment=True)

# @bp.route('/results/<filename>')
# def download_images(filename):
#     return send_from_directory("../results", filename, as_attachment=True)
    