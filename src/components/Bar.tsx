import React from 'react'

interface IProps<T extends number[]> {
  a: number;
  b?: string[];
  c: React.CSSProperties;
  d: T;
  children: React.ReactNode;
}

// export default function Bar(props:IProps):JSX.Element {
//   // console.log(params.a);
//   return <div style={props.c} />
//   // return Math.random() > 0.5? <div /> : null;
// }

// 定义组件类型
// 组件是函数 关注点:参数丶返回值
// 组件函数的参数 props 组件函数的返回值hsx元素

// React内置类型
// JSX.Elemnt
// React.ReactChild
// React.ReactNode

// React.ReactNode === React.ReactChild | React.ReactChild[] | null;
// React.ReactNode === JSX.Element | JSX.Element[] | string;

// 行内样式类型:React.CSSProperties

// 官方提供的函数组件：React.FC<T> (React.FunctionALComponnet)

// const Bar:React.FC<IProps> = (props) => {
//   console.log(props);
//   return <div>223</div>
// }

const Bar: React.FC<IProps<[1,2,3]>> =  (
  props = {
    a:1,
    b:[''],
    c:{},
    d:[1,2,3],
    children:<div />,
  },
) => {
  console.log(props);
  const fn =(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(e);
  }
  return <div onClick={fn}>123</div>
}

// 这种定义组件的方式，避开了类型检查
Bar.defaultProps = {};

export default Bar;
