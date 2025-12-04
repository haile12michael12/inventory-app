export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

export const validateNumber = (value) => {
  return !isNaN(value) && isFinite(value) && Number(value) >= 0;
};

export const validateProduct = (product) => {
  const errors = {};
  
  if (!validateRequired(product.name)) {
    errors.name = 'Product name is required';
  }
  
  if (!validateNumber(product.price)) {
    errors.price = 'Price must be a valid number';
  }
  
  if (!validateNumber(product.stock)) {
    errors.stock = 'Stock must be a valid number';
  }
  
  if (!validateRequired(product.unit)) {
    errors.unit = 'Unit is required';
  }
  
  return errors;
};

export const validateUser = (user) => {
  const errors = {};
  
  if (!validateRequired(user.name)) {
    errors.name = 'User name is required';
  }
  
  if (!validateRequired(user.email)) {
    errors.email = 'Email is required';
  } else if (!validateEmail(user.email)) {
    errors.email = 'Email is invalid';
  }
  
  if (!validateRequired(user.role)) {
    errors.role = 'Role is required';
  }
  
  return errors;
};