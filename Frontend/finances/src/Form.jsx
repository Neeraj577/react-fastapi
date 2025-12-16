import React from 'react'

const Form = ({handleChange, handleSubmit, formData}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-xl shadow space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-800">
        Add Transaction Form
      </h2>

      {/* Amount */}
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required
      />

      {/* Category */}
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        className="w-full border rounded-lg px-3 py-2"
        required
      />

      {/* Description */}
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full border rounded-lg px-3 py-2"
      />

      {/* Income Toggle */}
      <label className="flex items-center gap-2 text-gray-700">
        <input
          type="checkbox"
          name="is_income"
          checked={formData.is_income}
          onChange={handleChange}
          className="w-4 h-4"
        />
        Income?
      </label>

      {/* Date */}
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="w-full border rounded-lg px-3 py-2"
        required
      />

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Save
      </button>
    </form>
  )
}

export default Form