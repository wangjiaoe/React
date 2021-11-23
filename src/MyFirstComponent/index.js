import Avatar from'../Avatar';
function Profile() {
  return (
    <>
    <Avatar
      size = {200}
      person={{
        name:'Katsuko Saruhashi',
        imageld:'YfeOqp2s'
      }}
    />
    <Avatar
    size={150}
    person={{
      name:'Aklilu Lemma',
      imageld:'OKS67lhs'
    }}
    />
      <Avatar
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6s'
        }}
      />

    </>
  )
}
export default Profile
