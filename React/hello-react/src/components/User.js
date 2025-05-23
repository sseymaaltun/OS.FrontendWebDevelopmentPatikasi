import PropTypes from "prop-types";

/*function User (props) {
  return (
    <h1>
      {props.isLoggedIn ? `Benim adım ${props.name}, soyadım ${props.surname}` : "Giriş yapmadınız."}
    </h1>
  );
}*/

//yukardakiyle aşagıdaki aynı
function User ({name, surname, isLoggedIn, age, friends, adress}) {
    if (!isLoggedIn) {
        return <h1>Giriş yapmadınız.</h1>
    }
  return (
    <>
        <h1>
            {`Benim adım ${name}, soyadım ${surname}, (${age})`}
            <br/>
            <br/>
            {adress.title} {adress.title}
            <br/>
            <br/>
            {
                friends.map(friend => <div key = {friend.id}>{friend.name}</div>)
            }
        </h1>
    </>);
}

export default User;

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired, // isrequired zorunlu alan
    age: PropTypes.oneOfType([
        PropTypes.string, 
        PropTypes.number]).isRequired, // birden fazla türde olabilir
    friends: PropTypes.array,
    adress: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number,
    }),
}

User.defaultProps = { //app.jsde props verilmediğinde default değerler
    name: "İsimsiz", 
    isLoggedIn: false,
}
