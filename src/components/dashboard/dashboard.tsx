import * as React from "react";
import { connect } from "react-redux";
import { IState } from "../../reducers";
import { HomeNavComponent } from "../navs/home-nav.component";
import NewWorkout from "../new-workout";

/**
 * This is a shell component, don't impliment this!
 * Copy and past the text into new components.
 */
interface IProps {
  exampleProp: string;
}

class Dashboard extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
    // remember to bind your functions here
  }

  public render() {
    return (
      <div>
        <HomeNavComponent />
        <p />
        <NewWorkout />
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
)(Dashboard);
