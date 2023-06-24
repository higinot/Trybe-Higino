import React from 'react';
import { connect } from 'react-redux';
import { fetchAction } from './redux/actions';

function App({ isFetching, src, fetchAction }) {
  return (
    isFetching ? <p>Loading</p>
      : (
        <div style={{ width: 500 }}>
          <button
            style={{ display: 'block' }}
            onClick={fetchAction}
            type="button"
          >
            Novo Doguinho
          </button>
          <img style={{ width: '100%' }} src={src} alt="dog" />
        </div>
      )
  );
}

const mapStateToProps = (state) => ({
  src: state.imagePath,
  isFetching: state.isFetching});

const mapDispatchToProps = (dispatch) => ({
  fetchAction: () => dispatch(fetchAction())});

export default connect(mapStateToProps, mapDispatchToProps)(App);
