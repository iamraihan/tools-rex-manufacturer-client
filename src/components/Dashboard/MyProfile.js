import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";
import Loading from "../Home/Shared/Loading";

const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  const email = user?.email;

  const {
    data: profile,
    isLoading,
    refetch,
  } = useQuery("profile", () =>
    fetch(`https://tools-rex-backend.onrender.com/profile/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const updateProfileHandler = (event) => {
    event.preventDefault();
    const name = user?.displayName;
    const email = user?.email;
    const education = event.target.education.value;
    const location = event.target.location.value;
    const phone = event.target.phone.value;
    const linkedin = event.target.linkedin.value;

    const updateProfile = {
      name,
      email,
      education,
      location,
      phone,
      linkedin,
    };
    fetch(`https://tools-rex-backend.onrender.com/profile/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(updateProfile),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        event.target.reset();
        refetch();
      });
  };
  return (
    <div>
      <div className="hero  bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">{user?.displayName}</h1>
            <p className="pt-3 text-2xl font-semibold">Email: {user?.email}</p>
            <p className="pt-3 text-2xl font-semibold">
              Education : {profile?.education}
            </p>
            <p className="pt-3 text-2xl font-semibold">
              Location : {profile?.location}
            </p>
            <p className="pt-3 text-2xl font-semibold">
              Phone : {profile?.phone}
            </p>
            <p className="py-3 text-2xl font-semibold">
              <a href={profile?.linkedin}>Linkedin</a>
            </p>
          </div>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content btn btn-primary">
          Update Your Profile Information
        </div>
        <div className="collapse-content bg-secondary text-primary-content peer-checked:bg-white peer-checked:text-primary-content">
          <div>
            <h1 className="text-3xl font-bold text-center mb-5">
              Update Profile
            </h1>
            <form onSubmit={updateProfileHandler}>
              <div className="form-control w-full max-w-xs mx-auto">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={user?.displayName}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  disabled
                />
              </div>
              <div className="form-control w-full max-w-xs mx-auto">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  value={user?.email}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  disabled
                />
              </div>
              <div className="form-control w-full max-w-xs mx-auto">
                <label className="label">
                  <span className="label-text">Education</span>
                </label>
                <input
                  type="text"
                  name="education"
                  placeholder="Education"
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </div>
              <div className="form-control w-full max-w-xs mx-auto">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </div>
              <div className="form-control w-full max-w-xs mx-auto">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </div>
              <div className="form-control w-full max-w-xs mx-auto">
                <label className="label">
                  <span className="label-text">Linkedin</span>
                </label>
                <input
                  type="text"
                  name="linkedin"
                  placeholder="Linkedin"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="w-full max-w-xs mx-auto mt-5">
                <input
                  className="btn btn-primary w-full max-w-xs "
                  type="submit"
                  value="Update Profile"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
