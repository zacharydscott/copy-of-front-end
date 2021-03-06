import * as React from 'react';
import {NavComponent} from "../navs/nav.component";

export class HomeComponent extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

    public render() {
        return (
            <div>
                <NavComponent/>
                <div id="intro" className="jumbotron text-center">
                    <h1>FitTrac</h1>
                    <p>We specialize in blablabla</p>
                </div>
                <div id="about" className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8">
                            <h2>About Company Page</h2>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
                            <p>
                                Gallia est omnis divisa in partes tres, quarum unam incolunt Belgae, aliam Aquitani,
                                tertiam qui ipsorum lingua Celtae, nostra Galli appellantur. Hi omnes lingua, institutis,
                                legibus inter se differunt. Gallos ab Aquitanis Garumna flumen, a Belgis Matrona et Sequana dividit.
                                Horum omnium fortissimi sunt Belgae, propterea quod a cultu atque humanitate provinciae longissime absunt,
                                minimeque ad eos mercatores saepe commeant atque ea quae ad effeminandos animos pertinent important,
                                proximique sunt Germanis, qui trans Rhenum incolunt, quibuscum continenter bellum gerunt.
                            </p>
                            <button className="btn btn-default btn-lg">Get in Touch</button>
                        </div>
                    </div>
                        <div className="col-sm-4">
                            <span className="glyphicon glyphicon-signal logo"/>
                        </div>
                    </div>
            </div>
        );
    }
}
