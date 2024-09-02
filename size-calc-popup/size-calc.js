//reminder edit size percent formula

              //takes you to 1st page of popup
              function retake(){
                document.getElementById('page2').style.display = 'none';
                document.getElementById('page1').style.display = 'inline';
            }

           //weight slider
            function updateWeight() {
                    const slider = document.getElementById('weight-slider');
                    const weightOutput = document.getElementById('output-weight');
                    
                    // Display value in pounds
                    const weightLbs = slider.value;
                    weightOutput.textContent = `Weight: ${weightLbs} lbs`;

                    // Convert to kilograms
                    const weightKg = Math.round(weightLbs / 2.20462 * 10) / 10;
                    weightOutput.textContent += ` (${weightKg} kg)`;
                }

                // Add event listener to update on slider change
                const weightSlider = document.getElementById('weight-slider');
                weightSlider.addEventListener('input', updateWeight);

                // Initial update
                updateWeight();

        
             // Function to update height value and display
            function updateHeight() {
                const slider = document.getElementById('height-slider');
                const heightOutput = document.getElementById('output');
                console.log(heightOutput)
                // Display value in centimeters
                const heightCm = slider.value;
                heightOutput.textContent = `Height: ${heightCm} cm`;

                // Convert to feet and inches
                const feet = Math.floor(heightCm / 30.48);
                const inches = Math.round((heightCm % 30.48) / 2.54);
                heightOutput.textContent += ` (${feet}' ${inches}" )`;
            }

            // event listener to update on slider change
            const heightSlider = document.getElementById('height-slider');
            heightSlider.addEventListener('input', updateHeight);

            // Initial update
            updateHeight();
        
            function openPopup(){
                document.getElementById('overlay').style.display = 'grid';

            }

            function closePopup() {
                document.getElementById('overlay').style.display = 'none';
            }

            let bellySize = 0;
            let chestSize = 0;
                  //sets belly and chest size
                    function setBellySize(size) {
                        bellySize = size;
                    }
                    function setChestSize(size) {
                        chestSize = size;
                    }

        
          
        //caculates size
        function submitForm() {
            const gender = document.getElementById("gender").value;
            const heightSlider = document.getElementById('height-slider');
            const height = heightSlider.value;
            const weightSlider= document.getElementById('weight-slider');
            const weight = weightSlider.value;
            console.log(weight)
            const fitPreference = document.getElementById("fitPreference").value;
            const usualSize = document.getElementById("usualSize").value;
            
            let heightVal=0;
            let weightVal=0;
            let waistVal=0;
            let chestVal=0;
            let preferVal=0;
            let result ='';
            let sizeVal=0;
            

             //height in cm
                if(height < 169){
                    heightVal=1;
                }else if(height < 175 && height >= 169){
                    heightVal=2;
                }else if(height < 180 && height >= 175){
                    heightVal=3;
                }else if(height < 185 && height >= 180){
                    heightVal=4;
                }else if(height >=185){
                    heightVal=5;
                }

             //weight in lbs
                if(weight < 150){
                    weightVal=1;
                }else if(weight < 170 && weight >= 150){
                    weightVal=2;
                }else if(weight >= 170){
                    weightVal=3;
                }


                if(bellySize < 33){
                    waistVal=1;
                }else if(bellySize < 37 && bellySize >= 33){
                    waistVal=2;
                }else if(bellySize >= 37){
                    waistVal=3;
                }


                if(chestSize < 37){
                    chestVal=1;
                }else if(chestSize < 41 && chestSize >= 37){
                    chestVal=2;
                }else if(chestSize >= 41){
                    chestVal=3;
                }


                if(fitPreference === "tight" ){
                    preferVal=1;
                }else if(fitPreference === "regular" ){
                    preferVal=2;
                }else if(fitPreference === "loose" ){
                    preferVal=3;
                }

                if( usualSize === "small" ){
                    sizeVal=1;
                }else if( usualSize === "medium" ){
                    sizeVal=2;
                }else if( usualSize === "large" ){
                    sizeVal=3;
                }else if( usualSize === "xlarge" ){
                    sizeVal=5;
                }else if( usualSize === "xsmall" ){
                    sizeVal=-1;
                }




                let totalVal = heightVal + weightVal + waistVal + chestVal + preferVal+sizeVal;

                let percentD='';
                let percentU='';
                if(totalVal < 8 && totalVal>=5){
                    result = 'small';
                }else if(totalVal < 15 && totalVal >= 8){
                    result= 'medium';
                    percentD= (5-totalVal)/totalVal;
                    percentU=(18-totalVal)/totalVal;
                }else if(totalVal >= 15 && totalVal <18 ){
                    result = 'large';

                }else if(totalVal  < 5 ){
                    result = 'xsmall';

                }else if(totalVal  >= 18 ){
                    result = 'xlarge';

                }
                  //finds percantage difference rounded
                    let percDF = 0;
                    let percUF =0 ;

                if(result==='xsmall'){
                    percUF = 100-(((5-totalVal)/totalVal)*100);
                     percUF= Math.round(percUF);
                     percentU = `${percUF} % chance of size small being a good fit.`;
                
                }else if(result==='small'){
                    percDF = 100-(((4-totalVal)/totalVal)*100)*-1;
                    percDF=Math.round(percDF);;
                    percentD = `${percDF} % chance of size xsmall being a good fit.`;
                   
                    percUF = 100-((10-totalVal)/totalVal)*100;
                     percUF= Math.round(percUF);
                    percentU = `${percUF} % chance of size medium being a good fit.`;
                }else if(result==='medium'){
                    percDF = 100-(((5-totalVal)/totalVal)*100)*-1;
                    percDF=Math.round(percDF);
                    percentD = `${percDF} % chance of size small being a good fit.`;
                    
                    
                    percUF = 100-((15-totalVal)/totalVal)*100;
                     percUF= Math.round(percUF);
                    percentU = `${percUF} % chance of size large being a good fit.`;
                }else if(result==='large'){
                    
                    percUF = 100-(((18-totalVal)/totalVal)*100);
                     percUF= Math.round(percUF);
                    percentU = `${percUF} % chance of size xlarge being a good fit.`;
                   
                    percDF = 100-((totalVal-8)/8)*100;
                    percDF=Math.round(percDF);
                    percentD = `${percDF} % chance of size medium being a good fit.`;

                }else if(result==='xlarge'){
                    percDF = 100-((totalVal-18)/18)*100;
                    percDF=Math.round(percDF);
                    percentD = `${percDF} % chance of size large being a good fit.`;

                }
               


           

             
                document.querySelector('.perc1').innerHTML = percentD;
                document.querySelector('.perc2').innerHTML = percentU;
              
                //switches to popup
                document.getElementById('page1').style.display = 'none';
                document.getElementById('page2').style.display = 'inline';

                
               
                
                console.log(percentD)
                console.log(percentU);
                console.log(result); 
                
                console.log(totalVal);

                console.log(heightVal ,weightVal ,waistVal , chestVal , preferVal);
        
                document.querySelector('.final').innerHTML= result;
            
                document.querySelector('.idealSize').innerHTML= `Your ideal size is ${result}`;


        

        }

          //highlights selected button
            function selected1(clickedButton) {
                const buttonElements = document.querySelectorAll('.row1, .row12, .row13');
                buttonElements.forEach(buttonElement => {
                    buttonElement.classList.remove('isrow1');
                });
                clickedButton.classList.add('isrow1');
            }


           //highlights selected button
            function selected2(clickedButton) {
                const buttonElements = document.querySelectorAll('.row2, .row22, .row23');
                buttonElements.forEach(buttonElement => {
                    buttonElement.classList.remove('isrow1');
                });
                clickedButton.classList.add('isrow1');
            }



       