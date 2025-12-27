// export function UserSystem () {
//     fetch("user-system-api")
//     return (
//         user_list = []
//     );
// }

export function ActivitySystem() {

    const handleGet = () => {
        fetch("https://activities-system-api-xmi4ow.5sc6y6-1.usa-e2.cloudhub.io/api/activities")
        .then(response => {
            if(!response.ok){
                throw new Error("Could not fetch")
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }

    handleGet()
     
    return (
        <p>A tentativa de fetch da api</p>
    
    )
}


