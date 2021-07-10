let x=[],y=[],n=1,r=[],re=[],gr=[],bl=[];
let w=20;
let slider;
let sel;
let button1,button2;
let url;

function setup(){
  createCanvas(windowWidth,windowHeight);
  slider=createSlider(0,100,50);
  slider.position(30,40);

  sel=createSelect();
  sel.position(30,70);
  sel.option('circle');
  sel.option('square');
  sel.style('width','120px');
  sel.style('height','30px');

  button1=createButton('reset');
  button1.position(30,120);
  button1.style('width','120px')
  button1.style('height','30px');
  button1.mousePressed(reset);

  button2=createButton('overlap');
  button2.position(30,170);
  button2.style('width','120px')
  button2.style('height','30px');
  button2.mousePressed(overlap);

  url=createA('https://t.co/hCCMOMXzHu?amp=1', 'home');
  url.position(30,height-60);

  x[0]=width/2;
  y[0]=height/2;
  r[0]=min(width,height)*0.9;

  re[0]=random(50,200);
  gr[0]=random(50,200);
  bl[0]=random(50,200);

  frameRate(20);

  

}

function draw(){
  background("#f0f0f0");

  noStroke();
  for(let i=0;i<n;i++){
    fill(re[i],gr[i],bl[i]);
    if(sel.value()=="circle") ellipse(x[i],y[i],r[i],r[i]);
      else  rect(x[i]-r[i]/2,y[i]-r[i]/2,r[i],r[i]);
  }

  w=slider.value()/1.5;

  fill(0);
  textSize(20);
  text("color range",20,30);
}

function mouseMoved(){
  for(let i=0;i<n;i++){
    if(dist(mouseX,mouseY,x[i],y[i])<r[i]/2&&r[i]>min(width,height)/50){
      x[i]-=r[i]/4;
      y[i]-=r[i]/4;
      r[i]/=2

      r[n]=r[n+1]=r[n+2]=r[i];

      x[n]=x[i]+r[i];
      y[n]=y[i];
      re[n]=re[i]+random(-w,w);
      gr[n]=gr[i]+random(-w,w);
      bl[n]=bl[i]+random(-w,w);

      x[n+1]=x[i]+r[i];
      y[n+1]=y[i]+r[i];
      re[n+1]=re[i]+random(-w,w);
      gr[n+1]=gr[i]+random(-w,w);
      bl[n+1]=bl[i]+random(-w,w);

      x[n+2]=x[i];
      y[n+2]=y[i]+r[i];
      re[n+2]=re[i]+random(-w,w);
      gr[n+2]=gr[i]+random(-w,w);
      bl[n+2]=bl[i]+random(-w,w);

      re[i]+=random(-w,w);
      gr[i]+=random(-w,w);
      bl[i]+=random(-w,w);

      n+=3;
      
      break;
    }

  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
  x[0]=width/2;
  y[0]=height/2;
  r[0]=min(width,height)*0.9;

  re[0]=random(50,200);
  gr[0]=random(50,200);
  bl[0]=random(50,200);

  n=1;
}

function reset(){
  x[0]=width/2;
  y[0]=height/2;
  r[0]=min(width,height)*0.9;

  re[0]=random(50,200);
  gr[0]=random(50,200);
  bl[0]=random(50,200);

  n=1; 
}

function overlap(){
  x[0]=width/2+random(-100,100);
  y[0]=height/2+random(-100,100);
  r[0]=min(width,height)*0.9;
  
  re[0]=random(50,200);
  gr[0]=random(50,200);
  bl[0]=random(50,200);
}
