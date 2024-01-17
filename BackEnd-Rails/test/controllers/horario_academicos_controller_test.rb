require "test_helper"

class HorarioAcademicosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @horario_academico = horario_academicos(:one)
  end

  test "should get index" do
    get horario_academicos_url
    assert_response :success
  end

  test "should get new" do
    get new_horario_academico_url
    assert_response :success
  end

  test "should create horario_academico" do
    assert_difference("HorarioAcademico.count") do
      post horario_academicos_url, params: { horario_academico: { Room_id: @horario_academico.Room_id, fecha_fin: @horario_academico.fecha_fin, fecha_inicio: @horario_academico.fecha_inicio } }
    end

    assert_redirected_to horario_academico_url(HorarioAcademico.last)
  end

  test "should show horario_academico" do
    get horario_academico_url(@horario_academico)
    assert_response :success
  end

  test "should get edit" do
    get edit_horario_academico_url(@horario_academico)
    assert_response :success
  end

  test "should update horario_academico" do
    patch horario_academico_url(@horario_academico), params: { horario_academico: { Room_id: @horario_academico.Room_id, fecha_fin: @horario_academico.fecha_fin, fecha_inicio: @horario_academico.fecha_inicio } }
    assert_redirected_to horario_academico_url(@horario_academico)
  end

  test "should destroy horario_academico" do
    assert_difference("HorarioAcademico.count", -1) do
      delete horario_academico_url(@horario_academico)
    end

    assert_redirected_to horario_academicos_url
  end
end
