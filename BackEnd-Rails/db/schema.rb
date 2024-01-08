# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_01_08_030418) do
  create_table "books", force: :cascade do |t|
    t.integer "Student_id", null: false
    t.integer "Tecnico_id", null: false
    t.integer "Room_id", null: false
    t.string "RAZ_RES"
    t.datetime "HOR_INI_RES"
    t.datetime "HOR_FIN_RES"
    t.boolean "EST_RES"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "EST_TIM_RES"
    t.index ["Room_id"], name: "index_books_on_Room_id"
    t.index ["Student_id"], name: "index_books_on_Student_id"
    t.index ["Tecnico_id"], name: "index_books_on_Tecnico_id"
  end

  create_table "edificios", force: :cascade do |t|
    t.string "descripcion"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "floors", force: :cascade do |t|
    t.string "NOM_PIS"
    t.string "DES_PIS"
    t.string "IMG_PIS"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "edificio_id"
    t.index ["edificio_id"], name: "index_floors_on_edificio_id"
  end

  create_table "horarios", force: :cascade do |t|
    t.integer "hora_id", null: false
    t.string "Lunes"
    t.string "Martes"
    t.string "Miercoles"
    t.string "Jueves"
    t.string "Viernes"
    t.integer "room_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["hora_id"], name: "index_horarios_on_hora_id"
    t.index ["room_id"], name: "index_horarios_on_room_id"
  end

  create_table "horas", force: :cascade do |t|
    t.string "intervalo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rooms", force: :cascade do |t|
    t.integer "Floor_id", null: false
    t.string "NOM_HAB"
    t.string "TIP_HAB"
    t.integer "CAP_HAB"
    t.boolean "DIS_HAB"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["Floor_id"], name: "index_rooms_on_Floor_id"
  end

  create_table "students", force: :cascade do |t|
    t.string "NOM_USE"
    t.string "APE_USE"
    t.string "COR_USE"
    t.string "SEC_USE_digest"
    t.string "CAR_USE"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tecnicos", force: :cascade do |t|
    t.string "NOM_TEC"
    t.string "APE_TEC"
    t.string "FEC_NAC_TEC"
    t.date "FEC_ING_TEC"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "NOM_USER_TEC"
    t.string "CON_TEC"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "books", "Rooms"
  add_foreign_key "books", "Students"
  add_foreign_key "books", "Tecnicos"
  add_foreign_key "floors", "edificios"
  add_foreign_key "horarios", "horas"
  add_foreign_key "horarios", "rooms"
  add_foreign_key "rooms", "Floors"
end
