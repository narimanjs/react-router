import Footer from './Footer';
const Home = () => {
  return (
    <>
      <div className='container'>
        <h1>Главная</h1>
        <ul class='pagination'>
          <li class='disabled'>
            <a href='#!'>
              <i class='material-icons'>chevron_left</i>
            </a>
          </li>
          <li class='active'>
            <a href='#!'>1</a>
          </li>
          <li class='waves-effect'>
            <a href='#!'>2</a>
          </li>
          <li class='waves-effect'>
            <a href='#!'>3</a>
          </li>
          <li class='waves-effect'>
            <a href='#!'>4</a>
          </li>
          <li class='waves-effect'>
            <a href='#!'>5</a>
          </li>
          <li class='waves-effect'>
            <a href='#!'>
              <i class='material-icons'>chevron_right</i>
            </a>
          </li>
        </ul>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
