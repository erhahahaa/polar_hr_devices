import 'package:dartz/dartz.dart';
import 'package:hatofit/data/sources/api/base/api_path.dart';

import '../../../app/core/domain/failure.dart';
import '../../../app/core/domain/success.dart';
import 'base/api_request.dart';
import 'base/api_source.dart';

class ExerciseApi implements APIRequest {
  @override
  get body => null;

  @override
  Map<String, String>? get headers => null;

  @override
  HTTPMethod get method => HTTPMethod.get;

  @override
  String get path => ApiPath.exercise;

  @override
  String get url => ApiPath.baseUri + path;

  @override
  Future<Either<Failure, Success<Map<String, dynamic>>>> request() async =>
      ApiSource.instance.request(this);
}
