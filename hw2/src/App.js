import './App.css';
import Spoiler from './components/spoiler';
import RangeInput from './components/rangeInput';
import LoginForm from './components/loginForm';
import PasswordConfirm from './components/passwordConfirm';
import Carousel from './components/carousel';
import Pagination from './components/pagination';

function App() {

  const onLogin = (login, password) => {
    console.log('Login:', login, 'Password:', password);
  };


  const Content = ({ page }) => (
    <div style={{ fontSize: '5em' }}>
      Сторінка №{page}
    </div>
  );

  const Color = ({ page }) => (
    <div style={{ color: `rgb(${page * 16},${page * 16},${page * 16})` }}>
      {page}
    </div>
  );

  
  return (
    <div className="App">

      <div className='Cont'>
        <Spoiler header={<h1>Заголовок</h1>} open>
          Контент 1
          <p>
            лорем іпсум тралівалі і тп.
          </p>
        </Spoiler>
        <Spoiler>
          <h2>Контент 2</h2>
          <p>
            лорем іпсум тралівалі і тп.
          </p>
        </Spoiler>
      </div>

      <div className="Cont">
      <RangeInput min={2} max={10} />
      </div>

      
      <div className="Cont">
        <LoginForm onLogin={onLogin}/>
      </div>

      <div className="Cont">
        <PasswordConfirm min={2} />
      </div>
      
      <div className="Cont">
      <Carousel images={["https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-1.jpg",
                   "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-2.jpg",
                   "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-3.jpg",
                   "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-4.jpg",
                   "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-5.jpg"]} />
      </div>

      <div className="Cont">
        <Pagination render={Content} max={10} />
        <Pagination render={Color} max={16} />
      </div>

    </div>
  );  
}

export default App;
