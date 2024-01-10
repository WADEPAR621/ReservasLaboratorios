require "application_system_test_case"

class IntervaloHorariosTest < ApplicationSystemTestCase
  setup do
    @intervalo_horario = intervalo_horarios(:one)
  end

  test "visiting the index" do
    visit intervalo_horarios_url
    assert_selector "h1", text: "Intervalo horarios"
  end

  test "should create intervalo horario" do
    visit intervalo_horarios_url
    click_on "New intervalo horario"

    fill_in "Descripcion", with: @intervalo_horario.descripcion
    fill_in "Dia semana", with: @intervalo_horario.dia_semana_id
    fill_in "Hora fin", with: @intervalo_horario.hora_fin
    fill_in "Hora inicio", with: @intervalo_horario.hora_inicio
    fill_in "Horario academico", with: @intervalo_horario.horario_academico_id
    click_on "Create Intervalo horario"

    assert_text "Intervalo horario was successfully created"
    click_on "Back"
  end

  test "should update Intervalo horario" do
    visit intervalo_horario_url(@intervalo_horario)
    click_on "Edit this intervalo horario", match: :first

    fill_in "Descripcion", with: @intervalo_horario.descripcion
    fill_in "Dia semana", with: @intervalo_horario.dia_semana_id
    fill_in "Hora fin", with: @intervalo_horario.hora_fin
    fill_in "Hora inicio", with: @intervalo_horario.hora_inicio
    fill_in "Horario academico", with: @intervalo_horario.horario_academico_id
    click_on "Update Intervalo horario"

    assert_text "Intervalo horario was successfully updated"
    click_on "Back"
  end

  test "should destroy Intervalo horario" do
    visit intervalo_horario_url(@intervalo_horario)
    click_on "Destroy this intervalo horario", match: :first

    assert_text "Intervalo horario was successfully destroyed"
  end
end
