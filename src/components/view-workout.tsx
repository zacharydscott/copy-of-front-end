import * as React from "react";
import { connect } from "react-redux";
import { IState } from "../reducers";
import { WorkoutType } from "../models/workout-type";
import { Exercise } from "../models/exercise";


/**
 * This is a shell component, don't impliment this!
 * Copy and past the text into new components.
 */
interface IProps {

    date: string;
    exercises: Exercise[];
    order: number;
    type: WorkoutType;


}

class ViewWorkout extends React.Component<IProps, any> {
    constructor(props: any) {
        super(props);
        // remember to bind your functions here
    }


    public render() {

        const exerciseEntries = this.props.exercises.map(exercise => {

            return (<tr key={exercise.id}>
                <td>{exercise.name}</td>
                <td>{exercise.weight}</td>

                <td>{exercise.set}</td>
                <td>{exercise.rep}</td>
            </tr>

            )
        })
        return (
            <div>
                <div id="date-type">
                    <p id="order">Workout Number : {this.props.order}</p>
                    <p>Date : {this.props.date}</p>
                    <p>Type : {this.props.type.name}</p>
                </div>
                <p id="table-title">Exercise</p>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Set</th>
                            <th scope="col">Reps</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exerciseEntries}
                    </tbody>
                </table>
            </div>

        );
    }
}
const mapStateToProps = (state: IState) => {
    return {
        date: state.info.viewWorkout.date,
        exercises: state.info.viewWorkout.exercises,
        order: state.info.viewWorkout.order,
        type: state.info.viewWorkout.type,

    };
};

const mapDispatchToProps = {
    // insert actions here
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewWorkout);
