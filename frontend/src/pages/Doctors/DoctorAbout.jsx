import { formateDate } from "../../utils/formateDate";
import Feedback from "./Feedback";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Michael Ruth
          </span>
        </h3>
        <p className="text__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quis laborum corporis laudantium illo soluta at consectetur 
          accusantium omnis nesciunt doloribus obcaecati est assumenda 
          voluptas neque fugit similique asperiores ea iure eveniet, esse illum? Sunt, id tempore?
          Vel, officia! Pariatur ea explicabo dolorum in eligendi 
          porro quia earum libero! Amet, totam.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("06-14-2014")} - {formateDate("09-30-2018")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                New Apollo Hospital, New York.
              </p>
            </div>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("12-23-2010")} - {formateDate("06-14-2014")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                Maxxis Hospital, New York.
              </p>
            </div>
          </li>
        </ul>        
      </div>

      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {formateDate("12-23-2010")} - {formateDate("06-14-2014")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>

            <p className="text-[14px] leading-5 font-medium text-textColor">
              Maxxis Hospital, New York.
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {formateDate("06-14-2014")} - {formateDate("09-30-2018")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>

            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DoctorAbout;