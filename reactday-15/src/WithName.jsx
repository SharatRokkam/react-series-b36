const WithName = (OldComponent) => {
  return function EnhancedComponent(props) {
    return <OldComponent {...props} name="WithName" />;
  };
};

export default WithName;
