import React from 'react'

const ViewVideo = () => {
    return (
        <div>
          <table className="w-full border-spacing-y-2 border-separate mt-10">
            <thead className="rounded-2xl ">
              <tr className="h-12 p-2 bg-[#C0D8F6] rounded-2xl">
                <th className="px-2 h-12 rounded-2xl">
                  <span className="h-12 flex justify-center items-center">
                    <GrLinkPrevious className="text-2xl" />
                  </span>
                </th>
                <th className="text-base  font-bold  p-2 rounded-l-2xl">
                  aaradhya_97
                </th>
                <th className="text-base border-l-4 border-[#F0F4F9]  p-2">
                  Sydney, Australia
                </th>
                <th className="text-base border-l-4 border-[#F0F4F9]   p-2">F</th>
    
                <th className="text-base border-l-4 border-[#F0F4F9]   p-2">IND</th>
                <th className="text-base text-[#09B438] border-l-4 border-[#F0F4F9]   p-2 rounded-r-2xl">
                  Active
                </th>
                <th className="px-2 h-12 rounded-2xl">
                  <span className="h-12 flex justify-center items-center">
                    <GrLinkNext className="text-2xl" />
                  </span>
                </th>
              </tr>
            </thead>
          </table>
          <div className="border-spacing-1 border-[#888888] bg-white px-10 rounded-2xl pb-14">
            <div className="border-b-[1px] border-[#888888] flex justify-between items-center">
              <div className="flex gap-6 p-5 pt-10 ">
                <h1 className="text-black text-[54px] font-semibold">04</h1>
                <h1 className="text-black text-[24px] font-semibold pt-3">
                  Photos
                </h1>
              </div>
              <h1 className="text-black text-[16px] pr-20 pt-10 font-normal">
                Select all
              </h1>
            </div>
    
            <div className="w-full flex gap-2 py-6 border-b-[1px] border-[#888888]">
  <div className="w-[90px] h-[120px] relative">
    <video src="/video1.mp4" className="w-full h-full" muted autoPlay loop />
    <input
      type="checkbox"
      id="video"
      name="video"
      value="video"
      className="absolute right-4 top-4 w-[20px] h-[20px]"
    />
  </div>
  <div className="w-[90px] h-[120px] relative">
    <video src="/video1.mp4" className="w-full" muted autoPlay loop />
    <input
      type="checkbox"
      id="video1"
      name="video1"
      value="video1"
      className="absolute right-4 top-4 w-[20px] h-[20px]"
    />
  </div>

  <div className="w-[90px] h-[120px] relative">
    <video src="/video1.mp4" muted autoPlay loop />
    <input
      type="checkbox"
      id="video2"
      name="video2"
      value="video2"
      className="absolute right-4 top-4 w-[20px] h-[20px]"
    />
  </div>
</div>

            <div className="flex gap-10 py-10">
              <button className="text-base text-black border border-[#888888] rounded-2xl  w-60 h-14">
                Decline
              </button>
              <button className="text-base text-black border border-[#888888] rounded-2xl  w-60 h-14">
                Approve
              </button>
    
              {/* <button>Approve</button> */}
            </div>
            <h1 className="text-2xl text-[#444444] font-semibold pb-5">
              Select a reason for decline
            </h1>
    
            <div className="flex gap-16">
              <div className=" flex flex-col gap-5">
                <div className="flex gap-4">
                  <input
                    type="checkbox"
                    id="photo2"
                    name="photo2"
                    value="photo2"
                    className="w-5 h-5"
                  />
                  <label className="text-base text-[#2B2B2B]">Not Your Photo</label>
                </div>
                <div className="flex gap-4">
                  <input
                    type="checkbox"
                    id="photo2"
                    name="photo2"
                    value="photo2"
                    className="w-5 h-5"
                  />
                  <label className="text-base text-[#2B2B2B]">
                    Fake or Misleading
                  </label>
                </div>
                <div className="flex gap-4">
                  <input
                    type="checkbox"
                    id="photo2"
                    name="photo2"
                    value="photo2"
                    className="w-5 h-5"
                  />
                  <label className="text-base text-[#2B2B2B]">
                    Obscured Identity
                  </label>
                </div>
                <div className="flex gap-4">
                  <input
                    type="checkbox"
                    id="photo2"
                    name="photo2"
                    value="photo2"
                    className="w-5 h-5"
                  />
                  <label className="text-base text-[#2B2B2B]">
                    Nudity or Sexual Content
                  </label>
                </div>
                <div className="flex gap-4">
                  <input
                    type="checkbox"
                    id="photo2"
                    name="photo2"
                    value="photo2"
                    className="w-5 h-5"
                  />
                  <label className="text-base text-[#2B2B2B]">
                    Violence or Criminal Activity
                  </label>
                </div>
              </div>
              <div className=" flex flex-col gap-5">
                <div className="flex gap-4">
                  <input
                    type="checkbox"
                    id="photo2"
                    name="photo2"
                    value="photo2"
                    className="w-5 h-5"
                  />
                  <label className="text-base text-[#2B2B2B]">
                    Inappropriate Content
                  </label>
                </div>
                <div className="flex gap-4">
                  <input
                    type="checkbox"
                    id="photo2"
                    name="photo2"
                    value="photo2"
                    className="w-5 h-5"
                  />
                  <label className="text-base text-[#2B2B2B]">Low Quality</label>
                </div>
                <div className="flex gap-4">
                  <input
                    type="checkbox"
                    id="photo2"
                    name="photo2"
                    value="photo2"
                    className="w-5 h-5"
                  />
                  <label className="text-base text-[#2B2B2B]">
                    Multiple People
                  </label>
                </div>
                <div className="flex gap-4">
                  <input
                    type="checkbox"
                    id="photo2"
                    name="photo2"
                    value="photo2"
                    className="w-5 h-5"
                  />
                  <label className="text-base text-[#2B2B2B]">
                    Duplicate Upload
                  </label>
                </div>
                <div className="flex gap-4">
                  <input
                    type="checkbox"
                    id="photo2"
                    name="photo2"
                    value="photo2"
                    className="w-5 h-5"
                  />
                  <label className="text-base text-[#2B2B2B]">
                    Violence or Criminal Activity
                  </label>
                </div>
              </div>
            </div>
            <div className=" px-[34px] py-[20px] border border-[#888888] rounded-[15px] mr-[500px] mt-16 ">
              <h1 className="text-base text-[#202020] font-semibold pb-3">
                Fake or Misleading:
              </h1>
              <p className="text-base text-[#202020]">
                The upload includes wallpapers, visual graphics,
                <br /> or AI-generated content.
              </p>
            </div>
            <button className="text-base text-black border border-[#888888] rounded-2xl  w-60 h-14 mt-16">
            Confirm
              </button>
          </div>
        </div>
      );
}

export default ViewVideo