import React from 'react';
import Grid from 'react-css-grid'

const Pairings = () => (

    <Grid
    width={50}
    gap={24}>

    {/* Round of 16 */}

    <div>
        <div class="round r-of-16">Round of 16
        <div class="bracket-game">
            <div class="player top win"> Mew
            <div class="score"> 3 </div>
        </div>
            <div class="player bot loss"> Diglet
            <div class="score"> 1 </div>
        </div>
    </div>

    <div class="bracket-game cont">
            <div class="player top loss"> Onix
            <div class="score"> 0 </div>
        </div>
            <div class="player bot win"> Machop
            <div class="score"> 3 </div>
        </div>
    </div>
    </div>

    <div class="connectors r-of-16">
    <div class="top-line"></div>
    <div class="clear"></div>
    <div class="bottom-line"></div>
    <div class="clear"></div>
    <div class="vert-line"></div>
    <div class="clear"></div>
    <div class="next-line"></div>
    <div class="clear"></div>
    </div></div>

    {/* Quarter Final */}    

    <div> <div class="round q-f">Quarter Final
    <div class="bracket-game">
        <div class="player top win">
        Mew
        <div class="score">
            3
        </div>
        </div>
        <div class="player bot loss">
        Diglet
        <div class="score">
            1
        </div>
        </div>
    </div>
    <div class="bracket-game cont">
        <div class="player top loss">
        Onix
        <div class="score">
            0
        </div>
        </div>
        <div class="player bot win">
        Machop
        <div class="score">
            3
        </div>
        </div>
    </div>
    </div>
    <div class="connectors q-f">
    <div class="top-line"></div>
    <div class="clear"></div>
    <div class="bottom-line"></div>
    <div class="clear"></div>
    <div class="vert-line"></div>
    <div class="clear"></div>
    <div class="next-line"></div>
    <div class="clear"></div>
    
      {/* Semi Final */}  

    </div></div>
    <div>Semi Final</div>

    {/* Final */ }

    <div> <div><div class="round r-of-16">Final
    <div class="bracket-game">
        <div class="player top win">
        Pikachu
        <div class="score">
            3
        </div>
        </div>
        <div class="player bot loss">
        Horsea
        <div class="score">
            1
        </div>
        </div>
    </div>
    <div class="bracket-game cont">
        <div class="player top loss">
        Pidgey
        <div class="score">
            0
        </div>
        </div>
        <div class="player bot win">
        Squirtle
        <div class="score">
            3
        </div>
        </div>
    </div> 
    </div>
    <div class="connectors q-f">
    <div class="top-line"></div>
    <div class="clear"></div>
    <div class="bottom-line"></div>
    <div class="clear"></div>
    <div class="vert-line"></div>
    <div class="clear"></div>
    <div class="next-line"></div>
    <div class="clear"></div>
    </div></div></div>

    {/* Final */ }

    <div>Final</div>

    {/* Semi Final*/ }

    <div>Semi Final</div>

    {/* Quarter Final*/ }

    <div>Quarter Final</div>

    {/* Round of 16 */ }

    <div>Round of 16</div>
  
  </Grid>



);

export default Pairings;