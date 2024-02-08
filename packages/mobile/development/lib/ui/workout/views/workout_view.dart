import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:go_router/go_router.dart';
import 'package:hatofit/core/core.dart';
import 'package:hatofit/ui/ui.dart';
import 'package:hatofit/utils/utils.dart';

class WorkoutView extends StatelessWidget {
  const WorkoutView({super.key});

  @override
  Widget build(BuildContext context) {
    return RefreshIndicator(
      onRefresh: () {
        return context.read<WorkoutCubit>().getExercises();
      },
      child: Parent(
        appBar: AppBar(
          title: const Text('Workout'),
        ),
        child: BlocBuilder<WorkoutCubit, WorkoutState>(
          builder: (context, state) => state.when(
            loading: () => const Center(child: Loading()),
            failure: (message) {
              log.e(message.toString());
              if (message is CacheFailure) {
                return Center(
                    child: Text(Strings.of(context)!.workoutMenuNotAvailable));
              }
              return Center(child: Text(message.toString()));
            },
            start: (fT, eEnt, u) => StartWorkoutView(
              isFreeWorkout: fT,
              exercise: eEnt,
              user: u,
            ),
            finish: (fT, eEnt, sEnt) => const FinishWorkoutView(),
            success: (exercises) {
              exercises = exercises.where((e) => e.type!.isNotEmpty).toList();
              return GridView.builder(
                itemCount: exercises.length,
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 2,
                ),
                itemBuilder: (context, index) => InkWell(
                  onTap: () => context.pushNamed(Routes.workoutDetail.name),
                  child: Card(
                    child: Column(
                      children: [
                        ClipRRect(
                          borderRadius: BorderRadius.circular(16),
                          child: AspectRatio(
                            aspectRatio: 2 / 1.1,
                            child: CachedNetworkImage(
                              fit: BoxFit.cover,
                              imageUrl: exercises[index].thumbnail ??
                                  Constants.get.placeholderImage,
                              colorBlendMode: BlendMode.darken,
                              color: context.isDarkMode
                                  ? Colors.black.withOpacity(0.5)
                                  : Colors.black.withOpacity(0.25),
                            ),
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.all(8),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                exercises[index].name ?? '',
                                style: const TextStyle(
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              const SizedBox(height: 8),
                              Text(
                                exercises[index].description ?? '',
                                maxLines: 2,
                                overflow: TextOverflow.ellipsis,
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              );
            },
          ),
        ),
      ),
    );
  }
}
