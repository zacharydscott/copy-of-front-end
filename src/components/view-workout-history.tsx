import * as React from "react";
import { connect } from "react-redux";
import { IState } from "../reducers";
import {RouteComponentProps} from "react-router";
import {WorkoutSnapshot} from "../models/workout-snapshot";
import {Workout} from "../models/workout";
import {WorkoutType} from "../models/workout-type";
import {ExerciseType} from "../models/exercise-type";

/**
 * This is a shell component, don't impliment this!
 * Copy and past the text into new components.
 */
interface IProps extends RouteComponentProps<{}>, IState {
    workoutHistory: WorkoutSnapshot[];
    viewWorkout: Workout;
    workoutList: WorkoutType[];
    exerciseList: ExerciseType[];
}

class ViewWorkoutHistory extends React.Component<IProps, any> {
    constructor(props: any) {
        super(props);
        // remember to bind your functions here
    }

    public render() {
        // const workoutEntries = this.props.workoutHistory.map(workout => {
        //     return (<tr key={workout.order}>
        //             <td>{workout.date}</td>
        //             <td>{workout.type}</td>
        //         </tr>
        //
        //     )
        // })
        return (
            <div>
                <p>Insert test here</p>
            </div>
        );
    }
}
const mapStateToProps = (state: IState) => {
    return {
        // insert properties of the state here
    };
};

const mapDispatchToProps = {
    // insert actions here
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewWorkoutHistory);
