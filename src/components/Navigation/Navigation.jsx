import React from "react";
import "./Navigation.scss";

class Navigation extends React.Component {

  state = {}

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state);
  }

  render() {
    const { onChange , onSubmit } = this.props
    return (
      <div className='navigation'>
        <img className='navigation__logo'
            src="https://www.institucionesseguras.com.co/arquivos/experimentality.png"
            alt="logo"
          ></img>
          <div className='navigation__container'>
            <form
              onSubmit={onSubmit}
            >
              <label htmlFor="video">Buscar</label>
              <input className='navigation__input'
              name='video'
              type="text"
              placeholder='buscar'
              onChange={onChange}
              value={this.state.video}
              />
              <button
                type='submit'
              >
                send
              </button>
            </form>
          </div>
      </div>
    );
  }
}

export default Navigation;
