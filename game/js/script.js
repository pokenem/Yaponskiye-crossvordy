let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let numbers;
let pole;
let u = 0;
let check;
let otv;
let k = 0;
let cifri;
let otvet;
let widthcross;
let heightcross;
let circle;



function massiveget(m,x,y)
{
  circle = new Array(y);
  check = new Array(y);
  otv = new Array(y);
  for (let i = 0; i < circle.length; i++) {
  circle[i] = new Array(x);
}
  for (let i = 0; i < check.length; i++) {
  check[i] = new Array(x);
}
for (let i = 0; i < y; i++)
      for (let j = 0; j < x; j++)
        check[i][j] = '0';
for (let i = 0; i < y; i++)
      for (let j = 0; j < x; j++)
        circle[i][j] = '0';   
for (let i = 0; i < otv.length; i++) {
  otv[i] = new Array(x);
}
for (let i = 0; i < y; i++)
  for (let j = 0; j < x; j++)
  {
     otv[i][j] = m[u];
     u++; 
  }
}
function otrisovkacifr(m,x,y){
  for (let i = 0; i < y; i++)
  {
    let xxx = 370;
    while (m[k] != 'g')
    {
      if (m[k] == 'k')
      {
        let ch = m[k+1];
        ch += m[k+2];

        ctx.font = "20px Arial";
        ctx.fillText(ch,xxx-2,425 + i * 40);
      k++;
      k++;
      k++;
      xxx -= 40;
      }
      else
      {
      let ch = m[k];

        ctx.font = "30px Arial";
        ctx.fillText(ch,xxx,430 + i * 40);
      k++;
      xxx -= 40;
    }
    }
    k++;
  }
  for (let i = 0; i < x; i++)
  {
    let xxx = 390;
    while (cifri[k] != 'g')
    {
      if (m[k] == 'k')
      {
        let ch = m[k+1];
        ch += m[k+2];

        ctx.font = "20px Arial";
        ctx.fillText(ch,408 + i * 40,xxx - 2);
      k++;
      k++;
      k++;
      xxx -= 40;
      }
      else
      {
      let ch = cifri[k];

        ctx.font = "30px Arial";
        ctx.fillText(ch,410 + i * 40,xxx);
      k++;
      xxx -= 40;
    }
    }
    k++;
  }
}

canvas.addEventListener('click', handleMouseDown);
canvas.addEventListener('dblclick', rightMouseDown);

function table(m,n)
{
  for (let i = 0; i < 81; i++)
  {
  ctx.beginPath();
    ctx.moveTo(0,i * 40); 
    ctx.lineTo(3200,i * 40);
    ctx.lineWidth = 1;
    ctx.stroke();
  ctx.closePath();
  }

  for (let i = 0; i < 81; i++)
  {
    ctx.beginPath();
      ctx.moveTo(i * 40, 0);
      ctx.lineTo(i * 40, 3200);
      ctx.lineWidth = 1;
      ctx.stroke();
    ctx.closePath();
  }

  for (let i = 0; i < 81; i+=5)
  {
  ctx.beginPath();
    ctx.moveTo(0,i * 40); 
    ctx.lineTo(3200,i * 40);
    ctx.lineWidth = 3;
    ctx.stroke();
  ctx.closePath();
  }

  for (let i = 0; i < 81; i+=5)
  {
    ctx.beginPath();
      ctx.moveTo(i * 40, 0);
      ctx.lineTo(i * 40, 3200);
      ctx.lineWidth = 3;
      ctx.stroke();
    ctx.closePath();
  }

  ctx.rect(400,400,40*m,40*n);
  ctx.lineWidth = 6;
  ctx.stroke();

}

function rightMouseDown(e){
  //console.log(e);
  let xx = Math.floor(e.offsetX / 40) * 40;
  let yy = Math.floor(e.offsetY / 40) * 40;
    if (xx >= 400 && xx < 400 + widthcross * 40 && yy >= 400 && yy < 400 + heightcross * 40)
    {
    if (circle[Math.floor((yy - 400) / 40)][Math.floor((xx - 400) / 40)] == '1')
    {
      circle[Math.floor((yy - 400) / 40)][Math.floor((xx - 400) / 40)] ='0';
      ctx.beginPath();
      ctx.rect(xx,yy,40,40);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.closePath();
      table(widthcross,heightcross);
      table(widthcross,heightcross);
      table(widthcross,heightcross);
    }
    else
    {
      circle[Math.floor((yy - 400) / 40)][Math.floor((xx - 400) / 40)] = '1';
      ctx.beginPath();
      ctx.arc(xx + 20,yy + 20,10,0,2*Math.PI,false);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.closePath();
    } 
}
}

function handleMouseDown(e){
    //console.log(e);
    let xx = Math.floor(e.offsetX / 40) * 40;
    let yy = Math.floor(e.offsetY / 40) * 40;
    if (xx >= 400 && xx < 400 + widthcross * 40 && yy >= 400 && yy < 400 + heightcross * 40)
    {
    if (check[Math.floor((yy - 400) / 40)][Math.floor((xx - 400) / 40)] == '1')
    {
      circle[Math.floor((yy - 400) / 40)][Math.floor((xx - 400) / 40)] = '0';
      check[Math.floor((yy - 400) / 40)][Math.floor((xx - 400) / 40)] ='0';
      ctx.beginPath();
      ctx.rect(xx,yy,40,40);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.closePath();
      table(widthcross,heightcross);
      table(widthcross,heightcross);
      table(widthcross,heightcross);
    }
    else
    {
      circle[Math.floor((yy - 400) / 40)][Math.floor((xx - 400) / 40)] = '0';
      check[Math.floor((yy - 400) / 40)][Math.floor((xx - 400) / 40)] = '1';
      ctx.beginPath();
      ctx.rect(xx,yy,40,40);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.closePath();
    } 
    let rr = 0;
    for (let i = 0; i < heightcross; i++)
      for (let j = 0; j < widthcross; j++)
        if (check[i][j] == otv[i][j])
          rr++;
    if (rr == widthcross*heightcross)
      alert("CONGRATULATIONS!!!!!!!");
  }
  else
  {

    ctx.beginPath();
    ctx.moveTo(xx,yy); 
    ctx.lineTo(xx+40,yy+40);
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
  }
}