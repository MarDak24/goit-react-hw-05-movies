import{s as c,b as l,r as i,j as s}from"./index-2b5a5ca8.js";import{Q as f}from"./react-toastify.esm-6bb28ed1.js";import{f as h}from"./fetch-45fb81ef.js";import g from"./Loader-77e66fdc.js";import{N as p}from"./NoDataMessage-28cf68a3.js";const u=c.ul`
  display: grid;
  gap: 25px;
  grid-row: 5 / 6;
  grid-column: 1 / 4;
  color: #3b5998;
  text-align: justify;

  h3 {
    font-weight: 600;
    margin-bottom: 10px;
  }

  p {
    line-height: 1.2;
  }

  @media (width <= 576px) {
    grid-row: 6 / 7;
    grid-column: 1 / 3;
  }
`;function R(){const{id:r}=l(),[t,a]=i.useState([]),[n,o]=i.useState(!0);return i.useEffect(()=>{r&&h("movieReviews","","",r).then(e=>{a(e.results),o(!1)}).catch(e=>{f.error(`Error fetching data: ${e.message}`),o(!1)})},[r]),n?s.jsx(g,{}):Array.isArray(t)&&t.length>0?s.jsx(u,{children:t.map(({id:e,author:d,content:m})=>s.jsxs("li",{children:[s.jsxs("h3",{children:[d,":"]}),s.jsx("p",{children:m})]},e))}):s.jsx(p,{})}export{R as default};
