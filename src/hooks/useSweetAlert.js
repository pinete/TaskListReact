import Swal from 'sweetalert2'

const useSwal = () => {
  const onDelete = (func) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      focusConfirm: false,
      focusCancel: true,
      
    }).then((result) => {
      if (result.isConfirmed) {
        func()
        Swal.fire({
          title: 'Deleted!',
          text: 'Your selected item has been deleted.',
          icon: 'success',
          timer: 4000
        })  
      }
    }).catch((e) => console.error(e)) 
  }
  return { onDelete }
}


export default useSwal
