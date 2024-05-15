import ButtonLink from "./ButtonLink";
import useTeacherComponentHook from "../hooks/useTeacherComponentHook";

const TeacherComponent = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    lessonId,
    setLessonId,
    lessons,
    saveOrUpdateTeacher,
    title,
  } = useTeacherComponentHook();

  return (
    <div className="container mt-5">
      <ButtonLink text="Go Back" toAction="/" />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">{title}</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name: </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Last Name: </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email: </label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Select Lesson: </label>
                <select
                  className="form-select"
                  value={lessonId}
                  onChange={(e) => setLessonId(e.target.value)}
                >
                  <option value="Select Lesson">Select Lesson</option>
                  {lessons.map((item) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.lessonName}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button
                className="btn btn-outline-success"
                onClick={saveOrUpdateTeacher}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherComponent;
