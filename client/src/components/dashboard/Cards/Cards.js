import React from "react";
import "./Cards.scss";


function Cards({steps, heartrate, sleep, bodybattery}) {

  return (
  <div>

    <div class="jumbotron">
        <div class="row w-100">
            <div class="col-md-3">
                <div class="card card-battery mx-sm-1 p-3">
                    <div class="card card-battery shadow text-battery p-3 small-card" ><span class="fa fa-battery-half" aria-hidden="true"></span></div>
                    <div class="text-info text-center mt-3"><h4>Body Battery</h4></div>
                    <div class="text-info text-center mt-2"><h1>{bodybattery}%</h1></div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-heartrate mx-sm-1 p-3">
                    <div class="card card-heartrate shadow text-heartrate p-3 small-card"><span class="fa fa-heart fa-xs" aria-hidden="true"></span></div>
                    <div class="text-success text-center mt-3"><h4>Heart Rate</h4></div>
                    <div class="text-success text-center mt-2"><h1>{heartrate} BPM</h1></div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-steps mx-sm-1 p-3">
                    <div class="card card-steps shadow text-steps p-3 small-card" ><span class="fa fa-male fa-xs" aria-hidden="true"></span></div>
                    <div class="text-danger text-center mt-3"><h4>Steps</h4></div>
                    <div class="text-danger text-center mt-2"><h1>{steps}</h1></div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card card-sleep mx-sm-1 p-3">
                    <div class="card card-sleep shadow text-sleep p-3 small-card" ><span class="fa fa-bed fa-xs" aria-hidden="true"></span></div>
                    <div class="text-warning text-center mt-3"><h4>Sleep</h4></div>
                    <div class="text-warning text-center mt-2"><h1>{sleep} HRS</h1></div>
                </div>
            </div>
        </div>

        <div class="row w-100 bigcards">
            <div class="col-md-6">
                <div class="card card-activity">
                    <div class="card card-activity shadow text-activity p-3 big-card text-center" ><span class="fa fa-grav fa-xs" aria-hidden="true"></span></div>
                    <div class="text-warning text-center mt-3"><h4 className="bigtext">Activity Tracker</h4></div>
                    <div class="text-warning text-center mt-2"><h1>346</h1></div>
                </div>
            </div>
            
            <div class="col-md-6">
                <div class="card card-about">
                    <div class="card card-about shadow text-about p-3 big-card" ><span class="fa fa-question fa-7x " aria-hidden="true"></span></div>
                    <div class="text-warning text-center mt-3"><h4 className="bigtext">About</h4></div>
                    <div class="text-warning text-center mt-2"><h1>about content</h1></div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Cards;