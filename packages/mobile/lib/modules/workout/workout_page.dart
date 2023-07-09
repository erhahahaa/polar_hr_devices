import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:get/get.dart';
import 'package:polar_hr_devices/models/exercise_model.dart';
import 'package:polar_hr_devices/modules/workout/workout_controller.dart';
import 'package:polar_hr_devices/widget/appBar/custom_app_bar.dart';

class WorkoutPage extends GetView<WorkoutController> {
  const WorkoutPage({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(
        title: controller.title,
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Padding(
            padding: EdgeInsets.all(8),
            child: Text(
              'Today\'s Goal Workouts',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
          ),
          SizedBox(
              height: 150,
              child: FutureBuilder(
                future: controller.fetchExercises(),
                builder: (context, snapshot) {
                  if (snapshot.hasError) {
                    return Center(
                      child: Text('${snapshot.error}'),
                    );
                  } else if (snapshot.hasData) {
                    var exercises = snapshot.data as List<ExerciseModel>;
                    return SizedBox(
                      height: 150,
                      child: ListView.builder(
                        scrollDirection: Axis.horizontal,
                        itemCount: exercises.length,
                        itemBuilder: (context, index) {
                          return GestureDetector(
                            onTap: () {
                              controller
                                  .goToWorkoutDetail(snapshot.data[index]);
                            },
                            child: Container(
                              margin: const EdgeInsets.all(8.0),
                              width: 200,
                              decoration: BoxDecoration(
                                color: Colors.black.withOpacity(0.9),
                                image: DecorationImage(
                                    image: CachedNetworkImageProvider(
                                        exercises[index].thumbnail),
                                    fit: BoxFit.cover,
                                    opacity: 0.4),
                                borderRadius: BorderRadius.circular(8),
                              ),
                              child: Padding(
                                padding: const EdgeInsets.all(16.0),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      exercises[index].name,
                                      style: Theme.of(context)
                                          .textTheme
                                          .displaySmall,
                                    ),
                                    const SizedBox(
                                      height: 8,
                                    ),
                                    Row(
                                      children: [
                                        const Icon(
                                          FontAwesomeIcons.dumbbell,
                                          color: Colors.white,
                                          size: 12,
                                        ),
                                        const SizedBox(
                                          width: 8,
                                        ),
                                        Text(
                                          '${(exercises[index].instructions.length + 1) ~/ 2} sets',
                                          style: Theme.of(context)
                                              .textTheme
                                              .bodySmall,
                                        ),
                                      ],
                                    ),
                                    const SizedBox(
                                      height: 4,
                                    ),
                                    Row(
                                      children: [
                                        const Icon(
                                          FontAwesomeIcons.clock,
                                          color: Colors.white,
                                          size: 12,
                                        ),
                                        const SizedBox(
                                          width: 8,
                                        ),
                                        Text(
                                          '21 min',
                                          style: Theme.of(context)
                                              .textTheme
                                              .displaySmall,
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                              ),
                            ),
                          );
                        },
                      ),
                    );
                  } else {
                    return const Center(
                      child: CircularProgressIndicator(),
                    );
                  }
                },
              )),
          const Padding(
            padding: EdgeInsets.only(left: 8, right: 8, top: 16, bottom: 16),
            child: Text(
              'Top Collection Workouts',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
          ),
          // Expanded(
          //   child: ListView.builder(
          //     itemCount: controller.topCollectionWorkouts.length,
          //     itemBuilder: (context, index) {
          //       return Padding(
          //           padding:
          //               const EdgeInsets.only(left: 8, right: 8, bottom: 16),
          //           child: Container(
          //               height: 150,
          //               decoration: BoxDecoration(
          //                 color: Colors.black.withOpacity(0.9),
          //                 image: DecorationImage(
          //                     image: CachedNetworkImageProvider(controller
          //                         .topCollectionWorkouts[index].image),
          //                     fit: BoxFit.cover,
          //                     opacity: 0.4),
          //                 borderRadius: BorderRadius.circular(8),
          //               ),
          //               child: Padding(
          //                 padding: const EdgeInsets.all(16.0),
          //                 child: Column(
          //                   crossAxisAlignment: CrossAxisAlignment.start,
          //                   children: [
          //                     Text(
          //                         controller
          //                           .topCollectionWorkouts[index].name,
          //                       fontSize: 18,
          //                       fontWeight: FontWeight.w600,
          //                       color: Colors.white,
          //                     ),
          //                     const SizedBox(
          //                       height: 8,
          //                     ),
          //                     const Row(
          //                       children: [
          //                         Icon(
          //                           FontAwesomeIcons.dumbbell,
          //                           color: Colors.white,
          //                           size: 12,
          //                         ),
          //                         SizedBox(
          //                           width: 8,
          //                         ),
          //                         Text(
          //                             '12 Exercises',
          //                           color: Colors.white,
          //                           fontSize: 12,
          //                         ),
          //                       ],
          //                     ),
          //                     const SizedBox(
          //                       height: 4,
          //                     ),
          //                     const Row(
          //                       children: [
          //                         Icon(
          //                           FontAwesomeIcons.clock,
          //                           color: Colors.white,
          //                           size: 12,
          //                         ),
          //                         SizedBox(
          //                           width: 8,
          //                         ),
          //                         Text(
          //                             '21 min',
          //                           color: Colors.white,
          //                           fontSize: 12,
          //                         ),
          //                       ],
          //                     ),
          //                   ],
          //                 ),
          //               )));
          //     },
          //   ),
          // ),
        ],
      ),
    );
  }
}
