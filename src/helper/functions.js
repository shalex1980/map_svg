export function move(points) {
  const {x, y} =  minXY(points);
 
  return points.map(item => {
            let point = item.split(' ');

            //let result = (+point[0] - x) +", " + point[1];
            let result = `${+point[0] - x}, ${+point[1] - y}`;
            return result;
          })
}

export function minXY(points) {
  let arr = [];
  let x, y;
  points.reduce((acum, current) => {
    let point = current.split(' ');
    acum.push( +point[0], +point[1]);
    return acum;
  }, arr)
  y = Math.min(...arr.filter((item, index) => index % 2));
  x = Math.min(...arr.filter((item, index) => !(index % 2)));
  return {x, y}
}