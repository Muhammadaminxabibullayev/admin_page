import './Manage.css'
import Circle from '../../assets/diogramma.svg'
const Manage = () => {
  return (
    <div>
        <h1>Boshqaruv</h1>
        <div className="student_wave">
          <h3 className='wave'>O’quvchilar oqimi</h3>
          <img src={Circle} alt="" className='circle_img' />
          <div className="num_of_came">
            <div className="stu_came">
              <p className='stu_came_p'>Kelmaganlar</p>
              <p className='num_of_stu'>66 ta</p>
            </div>
            <div className="stu_came">
              <p className="stu_came_p">Kelganlar</p>
              <p className='num_of_stu'>129 ta</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Manage