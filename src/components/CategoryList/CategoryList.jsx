import account from '../../assets/icons/accounts.png';
import creative from '../../assets/icons/creative.png';
import marketing from '../../assets/icons/marketing.png';
import chip from '../../assets/icons/chip.png';

const CategoryList = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-4xl">Job Category List</h2>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className='grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 mx-10 md:mx-0 my-20 gap-10'>

        <div>
          <div className="card bg-base-100 w-72 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={account}
                alt="Shoes"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Account & Finance</h2>
              <p>300 Jobs Available</p>
            </div>
          </div>
        </div>

        <div>
          <div className="card bg-base-100 w-72 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={creative}
                alt="Shoes"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Creative Design</h2>
              <p>100+ Jobs Available</p>
            </div>
          </div>
        </div>

        <div>
          <div className="card bg-base-100 w-72 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={marketing}
                alt="Shoes"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Marketing & Sales</h2>
              <p>150 Jobs Available</p>
            </div>
          </div>
        </div>

        <div>
          <div className="card bg-base-100 w-72 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={chip}
                alt="Shoes"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Engineering Job</h2>
              <p>224 Jobs Available</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
export default CategoryList;