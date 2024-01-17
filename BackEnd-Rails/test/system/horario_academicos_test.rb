require "application_system_test_case"

class HorarioAcademicosTest < ApplicationSystemTestCase
  setup do
    @horario_academico = horario_academicos(:one)
  end

  test "visiting the index" do
    visit horario_academicos_url
    assert_selector "h1", text: "Horario academicos"
  end

  test "should create horario academico" do
    visit horario_academicos_url
    click_on "New horario academico"

    fill_in "Room", with: @horario_academico.Room_id
    fill_in "Fecha fin", with: @horario_academico.fecha_fin
    fill_in "Fecha inicio", with: @horario_academico.fecha_inicio
    click_on "Create Horario academico"

    assert_text "Horario academico was successfully created"
    click_on "Back"
  end

  test "should update Horario academico" do
    visit horario_academico_url(@horario_academico)
    click_on "Edit this horario academico", match: :first

    fill_in "Room", with: @horario_academico.Room_id
    fill_in "Fecha fin", with: @horario_academico.fecha_fin
    fill_in "Fecha inicio", with: @horario_academico.fecha_inicio
    click_on "Update Horario academico"

    assert_text "Horario academico was successfully updated"
    click_on "Back"
  end

  test "should destroy Horario academico" do
    visit horario_academico_url(@horario_academico)
    click_on "Destroy this horario academico", match: :first

    assert_text "Horario academico was successfully destroyed"
  end
end
