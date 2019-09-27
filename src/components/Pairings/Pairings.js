import React from 'react';
import Grid from 'react-css-grid'

const Pairings = () => (

    <Grid
    width={50}
    gap={25}>
        

    {/* Round of 16 */}
    
    <div>
        <br></br><br></br>
        <div class="round r-of-16">Round of 16
        <br></br><br></br>
        <div class="bracket-game">
            <div class="player top win"> Mew
            <div class="score"> 4 </div>
        </div>
            <div class="player bot loss"> Diglet
            <div class="score"> 0 </div>
        </div>
    </div>

    <br></br>
    <div class="bracket-game cont">
            <div class="player top loss"> Onix
            <div class="score"> 2 </div>
        </div>
            <div class="player bot win"> Machop
            <div class="score"> 4 </div>
        </div>
    <br></br>
        <div class="bracket-game">
        <div class="player top win">
        Pikachu
        <div class="score">
            4
        </div>
        </div>
        <div class="player bot loss">
        Horsea
        <div class="score">
            2
        </div>
        </div>
    </div>
    <br></br>
    <div class="bracket-game cont">
            <div class="player top loss"> Ekans
            <div class="score"> 0 </div>
        </div>
            <div class="player bot win"> Jynx
            <div class="score"> 4 </div>
        </div>
    </div>

    </div>
    </div>

    <div class="connectors top r-of-16">
            <div class="top-line"></div>
            <div class="clear"></div>
            <div class="bottom-line"></div>
            <div class="clear"></div>
            <div class="vert-line"></div>
            <div class="clear"></div>
            <div class="next-line"></div>
            <div class="clear"></div>
            
    </div>

    <div class="connectors bot r-of-16">
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
    
    <div> <br></br>
    <div class="round q-f">Quarter Finals
    <br></br> <br></br> <br></br><br></br>
    <div class="bracket-game">
        <div class="player top win">
        Mew
        <div class="score">
            4
        </div>
        </div>
        <div class="player bot loss">
        Machop
        <div class="score">
            2
        </div>
        </div>
    </div>
    <br></br> <br></br> <br></br> <br></br> <br></br>
    <div class="bracket-game cont">
        <div class="player top loss">
        Pikachu
        <div class="score">
            1
        </div>
        </div>
        <div class="player bot win">
        Jynx
        <div class="score">
            4
        </div>
        </div>
    </div>
    </div>
    <div class="connectors top q-f">
    <div class="top-line"></div>
    <div class="clear"></div>
    <div class="bottom-line"></div>
    <div class="clear"></div>
    <div class="vert-line"></div>
    <div class="clear"></div>
    <div class="next-line"></div>
    <div class="clear"></div>
    
    </div>
    
    <div class="connectors bot q-f">
    <div class="top-line"></div>
    <div class="clear"></div>
    <div class="bottom-line"></div>
    <div class="clear"></div>
    <div class="vert-line"></div>
    <div class="clear"></div>
    <div class="next-line"></div>
    <div class="clear"></div>
    
    </div>
    
    </div>

      
      {/* Semi Final */}  

      <div><br></br><br></br>
           <div class="round s-f">Semi Finals
    <br></br> <br></br> <br></br>
    <br></br> <br></br> <br></br> <br></br> 
    <div class="bracket-game">
        <div class="player top win">
        Mew
        <div class="score">
            4
        </div>
        </div>
        <div class="player bot loss">
        Jynx
        <div class="score">
            1
        </div>
        </div>
    </div>
    </div>

    <div class="connectors top s-f">
    <div class="top-line"></div>
    <div class="clear"></div>
    <div class="bottom-line"></div>
    <div class="clear"></div>
    <div class="vert-line"></div>
    <div class="clear"></div>
    <div class="next-line"></div>
    <div class="clear"></div>
    
    </div></div>

    

    {/* Final */ }

    <div> <br></br><br></br>
        <div><div class="round final">Final</div><br></br><br></br>
    
        <div>WINNER</div><br></br>
       {/*<i class="fa fa-trophy fa-3x"></i>*/}
       <img src="https://img.icons8.com/color/48/000000/star-pokemon.png"></img>
        <div class="bracket-game">
        <div class="player top win">
       <center> Mew </center> </div></div>
    

    <br></br><br></br>
    
    <div class="bracket-game">
        <div class="player top win">
        Mew
        <div class="score">
            2
        </div>
        </div>
        <div class="player bot loss">
        Nidoran
        <div class="score">
            0
        </div>
        </div>
    </div>
    </div>

    <div class="connectors final">
    <div class="top-line"></div>
    <div class="clear"></div>
    <div class="bottom-line"></div>
    <div class="clear"></div>
    <div class="vert-line"></div>
    <div class="clear"></div>
    <div class="next-line"></div>
    <div class="clear"></div>
    </div>
    
    <div class="connectors reversed final">
    <div class="top-line"></div>
    <div class="clear"></div>
    <div class="bottom-line"></div>
    <div class="clear"></div>
    <div class="vert-line"></div>
    <div class="clear"></div>
    <div class="next-line"></div>
    <div class="clear"></div>
    </div>
    
    </div>

    {/* Semi Final*/ }

    <div><br></br><br></br>
         <div class="round s-f reversed">Semi Finals
    <br></br> <br></br> <br></br>
    <br></br> <br></br> <br></br> <br></br> 
    <div class="bracket-game">
        <div class="player top win">
        Nidoran
        <div class="score">
            4
        </div>
        </div>
        <div class="player bot loss">
        Mankey
        <div class="score">
            2
        </div>
        </div>
    </div>
    </div>

    <div class="connectors s-f">
    <div class="top-line"></div>
    <div class="clear"></div>
    <div class="bottom-line"></div>
    <div class="clear"></div>
    <div class="vert-line"></div>
    <div class="clear"></div>
    <div class="next-line"></div>
    <div class="clear"></div>
    
    </div></div>

    {/* Quarter Final*/ }

    <div> <br></br>
    <div class="round q-f reversed">Quarter Finals
    <br></br> <br></br> <br></br><br></br>
    <div class="bracket-game">
        <div class="player top win">
        Nidoran
        <div class="score">
            4
        </div>
        </div>
        <div class="player bot loss">
        Staryu
        <div class="score">
            2
        </div>
        </div>
    </div>
    <br></br> <br></br> <br></br> <br></br> <br></br>
    <div class="bracket-game cont">
        <div class="player top loss">
        Cubone
        <div class="score">
            0
        </div>
        </div>
        <div class="player bot win">
        Mankey
        <div class="score">
            4
        </div>
        </div>
    </div>
    </div>
    <div class="connectors reversed top q-f">
    <div class="top-line"></div>
    <div class="clear"></div>
    <div class="bottom-line"></div>
    <div class="clear"></div>
    <div class="vert-line"></div>
    <div class="clear"></div>
    <div class="next-line"></div>
    <div class="clear"></div>
    
    </div>
    

    </div>

    {/* Round of 16 */ }

    <div><br></br><br></br>
        <div class="round r-of-16 reversed">Round of 16
        <br></br><br></br>
        <div class="bracket-game">
            <div class="player top win"> Nidoran
            <div class="score"> 4 </div>
        </div>
            <div class="player bot loss"> Weedle
            <div class="score"> 1 </div>
        </div>
    </div>
    <br></br>
    <div class="bracket-game cont">
            <div class="player top loss"> Abra
            <div class="score"> 2 </div>
        </div>
            <div class="player bot win"> Staryu
            <div class="score"> 4 </div>
        </div>
    <br></br>
        <div class="bracket-game">
        <div class="player top win">
        Cubone
        <div class="score">
            4
        </div>
        </div>
        <div class="player bot loss">
        Voltorb
        <div class="score">
            3
        </div>
        </div>
    </div>
    <br></br>
    <div class="bracket-game cont">
            <div class="player top loss"> Seel
            <div class="score"> 0 </div>
        </div>
            <div class="player bot win"> Mankey
            <div class="score"> 4 </div>
        </div>
    </div>

    </div>
    </div>

    <div class="connectors reversed top r-of-16">
    <div class="top-line"></div>
    <div class="clear"></div>
    <div class="bottom-line"></div>
    <div class="clear"></div>
    <div class="vert-line"></div>
    <div class="clear"></div>
    <div class="next-line"></div>
    <div class="clear"></div>
    </div>
    
    <div class="connectors reversed bot r-of-16">
    <div class="top-line"></div>
    <div class="clear"></div>
    <div class="bottom-line"></div>
    <div class="clear"></div>
    <div class="vert-line"></div>
    <div class="clear"></div>
    <div class="next-line"></div>
    <div class="clear"></div>
    </div>
    
    
    
    </div>
    
    

  </Grid>

);

export default Pairings;