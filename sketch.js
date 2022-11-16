let table;

function preload(){
  table = loadTable('future_cities_data_truncated.csv', 'csv', 'header');
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(250);
  stroke(5);
  numRows = table.getRowCount();
  numCols = table.getColumnCount();
  //print("rows:"+ numRows + "cols:"numCols)

  // count columns
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');
  print('All cities:', table.getColumn('current_city'));

}

function draw(){
  createCanvas(windowWidth, windowHeight);
  background(250);

  line(0, windowHeight/2, windowWidth, windowHeight/2);

  for(let i=0; i<numRows; i++){
    strokeWeight(5);
    let yValue = table.get(i, 'Annual_Mean_Temperature');

    if(yValue < 11){
      stroke(0, 0, 255);
    }
    if(yValue >= 11){
      stroke(255, 0, 0);
    }
    line(40+(windowWidth/numRows)*i,windowHeight/2, 40+(windowWidth/numRows)*i, windowHeight/2 - yValue*10);

    let yValueFuture = float(table.get(i, 'future_Annual_Mean_Temperature'));
    if(yValueFuture < 11){
      stroke(0, 0, 255);
    }
    if(yValueFuture >= 11){
      stroke(255, 0, 0);
    }
    line(40+(windowWidth/numRows)*i, windowHeight/2, 40+(windowWidth/numRows)*i, windowHeight/2 + yValueFuture*10 );

    //text
    push();

    //translate(100, 180);

    textSize(15);
    noStroke();

    
    text(table.get(i,'current_city'), 40+(windowWidth/numRows)*i, windowHeight/2 + yValueFuture*10+25);
    
    textAlign(CENTER);
    text('annual mean temperature', windowWidth/2, (windowHeight/4));
    textAlign(CENTER);
    text('future annual mean temperature', windowWidth/2, 250+(windowHeight/2));
    pop();

    push();
    textAlign(RIGHT);
    noStroke();
    fill(0,0,255);
    text('< 11°',50,50);
    pop();

    push();
    textAlign(RIGHT);
    noStroke();
    fill(255,0,0);
    text('> 11°',50,80);
    pop();
  }
}
