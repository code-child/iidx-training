import PropTypes from 'prop-types'

function Container({ children }) {
  return (
    <div className="relative bg-white overflow-hidden flex-1 overflow-y-auto">
      {children}
    </div>
  );
}

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};