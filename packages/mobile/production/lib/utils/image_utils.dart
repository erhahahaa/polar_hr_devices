import 'dart:convert';
import 'dart:io';
import 'package:flutter/services.dart';
import 'package:image_picker/image_picker.dart';
import 'package:path_provider/path_provider.dart';
import 'package:image/image.dart' as img;

class ImageUtils {
  static final picker = ImagePicker();

  static Future<XFile?> imagePicker() async {
    return await picker.pickImage(source: ImageSource.gallery);
  }

  static Future<bool> saveFromAsset(String path) async {
    if (path.isEmpty) return false;
    final img.Image? image =
        img.decodeImage((await rootBundle.load(path)).buffer.asUint8List());
    final img.Image resizedImage = img.copyResize(image!, height: 256);
    final File file = await localPath();
    await file.writeAsBytes(img.encodeJpg(resizedImage));
    return true;
  }

  static Future<String> toBase64(XFile pickedImage) async {
    final img.Image? image = img.decodeImage(await pickedImage.readAsBytes());
    final img.Image resizedImage = img.copyResize(image!, height: 256);
    final File file = await localPath();
    await file.writeAsBytes(img.encodeJpg(resizedImage));
    final bytes = await file.readAsBytes();
    return base64Encode(bytes);
  }

  static Future<File> fromBase64(String base64) async {
    final img.Image? image = img.decodeImage(base64Decode(base64));
    final img.Image resizedImage = img.copyResize(image!, height: 256);
    final File file = await localPath();
    await file.writeAsBytes(img.encodeJpg(resizedImage));
    return file;
  }

  static Future<File> localPath() async {
    final Directory? dir = await getExternalStorageDirectory();
    return File('${dir!.path}/photo-profile.jpg');
  }
}
