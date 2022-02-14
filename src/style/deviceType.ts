interface MediaQueryObj {
  PC: string;
  Mobile: string;
}

/*
1. Object.entries(breakPoints);

Ex)
 const separateObj = [['PC', '500px'], ['Mobile', '1160px']];

2. separateObj.reduce(func, {})

Ex) Wanting
  const DeviceSize = {
    PC: '@media only screen and (max-width: 500px)',
    Mobile: '@media only screen and (max-width: 1160px)'
  }

  func = (mediaQueryObj, rule) => {
    mediaQueryObj[rule[0]] = `@media only screen and (max-width: ${rule[1]})`

    return mediaQueryObj;
  }

** Study
interface ObjType {
  [key: string]: string;
  [key in string]: string;
};
*/

const breakPoints = {
  PC: '1160px',
  Mobile: '800px'
};

const DEVICETYPE = Object.entries(breakPoints).reduce(
  (mediaQueryObj, [deviceType, constraints]) => {
    mediaQueryObj[deviceType as keyof MediaQueryObj] = `@media only screen and (max-width: ${constraints})`;

    return mediaQueryObj;
  },
  breakPoints
);

export default DEVICETYPE;
