require "test_helper"

class IntervaloHorariosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @intervalo_horario = intervalo_horarios(:one)
  end

  test "should get index" do
    get intervalo_horarios_url
    assert_response :success
  end

  test "should get new" do
    get new_intervalo_horario_url
    assert_response :success
  end

  test "should create intervalo_horario" do
    assert_difference("IntervaloHorario.count") do
      post intervalo_horarios_url, params: { intervalo_horario: { descripcion: @intervalo_horario.descripcion, dia_semana_id: @intervalo_horario.dia_semana_id, hora_fin: @intervalo_horario.hora_fin, hora_inicio: @intervalo_horario.hora_inicio, horario_academico_id: @intervalo_horario.horario_academico_id } }
    end

    assert_redirected_to intervalo_horario_url(IntervaloHorario.last)
  end

  test "should show intervalo_horario" do
    get intervalo_horario_url(@intervalo_horario)
    assert_response :success
  end

  test "should get edit" do
    get edit_intervalo_horario_url(@intervalo_horario)
    assert_response :success
  end

  test "should update intervalo_horario" do
    patch intervalo_horario_url(@intervalo_horario), params: { intervalo_horario: { descripcion: @intervalo_horario.descripcion, dia_semana_id: @intervalo_horario.dia_semana_id, hora_fin: @intervalo_horario.hora_fin, hora_inicio: @intervalo_horario.hora_inicio, horario_academico_id: @intervalo_horario.horario_academico_id } }
    assert_redirected_to intervalo_horario_url(@intervalo_horario)
  end

  test "should destroy intervalo_horario" do
    assert_difference("IntervaloHorario.count", -1) do
      delete intervalo_horario_url(@intervalo_horario)
    end

    assert_redirected_to intervalo_horarios_url
  end
end
