import React from 'react'
import Productbox from './Productbox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';
import pimage3 from '../images/s2.png';
import pimage4 from '../images/s2.png';

import pimage5 from '../images/s2.png';
function Products(){
return ( 
<div id= 'products'>
<h1>CHOOSE &ENJOY</h1>
<br></br>
<p>Lorem ipsum dolor sit amet consectetur adipipsum dolor sit, amet consectetur adipisicing elit. Nobis deserunt voluptates repellat. Nulla au
      t, tempora neque id sed maiores provident. 
      Corporis laudantium quidem officia sint enim nisi veritatis eius. Labore! </p>
<br></br>
<br></br>
<div className='a-container'>
<Productbox image={pimage1} title="Cafe Latte"name= "Prada"
      category= "Bags"/>
<Productbox image={pimage2} title="Diamond Cassino" name= "Gucci"
      category= "Bags"/>
<Productbox image={pimage3} title="On The Rock Restaurent" name= "Guess"
      category= "Bags"/>
<Productbox image={pimage4} title="On The Rock Restaurent" name= "Rolex"
      category= "Watches"/>
<Productbox image={pimage5} title="On The Rock Restaurent"  name= "Timex"
      category= "Watches"/>

  
</div>
</div>
)}
export default Products;