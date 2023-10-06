import { toast } from 'react-toastify';

export function errorNotify(message: string) {
  toast.error(message, {
    position: 'top-right',
    toastId: 'error-message',
    theme: 'colored',
    pauseOnHover: false,
  });
}

export function successNotify(message: string) {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    toastId: 'success-message',
    theme: 'colored',
    pauseOnHover: false,
  });
}
