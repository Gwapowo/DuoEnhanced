//WIP. This script is heavily unfinished.
const boomRed = newEffect(20, e => {
	 Draw.color(Color.red, Color.lightGray, e.fin()); 
	 Lines.stroke(e.fout() * 4); 
	  Lines.circle(e.x, e.y, e.fin() * 50);
	  
	  const boomOrange = newEffect(20, e => {
	 Draw.color(Color.orange, Color.lightGray, e.fin()); 
	 Lines.stroke(e.fout() * 4); 
	  Lines.circle(e.x, e.y, e.fin() * 50);
	  
	  const boomGreen = newEffect(20, e => {
	 Draw.color(Color.green, Color.lightGray, e.fin()); 
	 Lines.stroke(e.fout() * 4); 
	  Lines.circle(e.x, e.y, e.fin() * 50);
